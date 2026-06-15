import { processOAuthCallback } from 'corsair/oauth';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { corsair } from '@/server/corsair';
import { getSessionTenantId } from '@/server/auth';
import { prisma } from '@/lib/prisma';

const REDIRECT_URI = `${process.env.APP_URL}/api/connect/callback`;

function escapeHtml(value: string): string {
     return value
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;');
}

export async function GET(request: NextRequest) {
     const { searchParams } = new URL(request.url);

     const code = searchParams.get('code');
     const state = searchParams.get('state');
     const error = searchParams.get('error');

     const clearCookie = {
          'Set-Cookie': 'oauth_state=; HttpOnly; Path=/; Max-Age=0',
          'Content-Type': 'text/html',
     };

     if (error) {
          return new NextResponse(
               `<html><body><h2>Authorization failed</h2><p>${escapeHtml(error)}</p><p><a href="/settings">Back to settings</a></p></body></html>`,
               { status: 400, headers: clearCookie },
          );
     }

     if (!code || !state) {
          return new NextResponse('<p>Missing code or state.</p><p><a href="/settings">Back to settings</a></p>', {
               status: 400,
               headers: clearCookie,
          });
     }

     const storedState = request.cookies.get('oauth_state')?.value;

     if (!storedState || storedState !== state) {
          return new NextResponse('<p>Invalid state. Possible CSRF attempt.</p><p><a href="/settings">Back to settings</a></p>', {
               status: 400,
               headers: clearCookie,
          });
     }

     try {
          const tenantId = await getSessionTenantId();
          if (!tenantId) {
               return new NextResponse('<p>Unauthorized: No session found.</p>', {
                    status: 401,
                    headers: clearCookie,
               });
          }

          const result = await processOAuthCallback(corsair, {
               code,
               state,
               redirectUri: REDIRECT_URI,
          });

          // Determine the provider from the plugin name
          const provider = result.plugin?.toUpperCase() === 'GMAIL' ? 'GMAIL' : 'CALENDAR';

          // Store the integration in the database
          await prisma.integration.upsert({
               where: {
                    userId_provider: {
                         userId: tenantId,
                         provider: provider as any,
                    },
               },
               update: {
                    connected: true,
                    connectionId: result.tenantId,
                    updatedAt: new Date(),
               },
               create: {
                    userId: tenantId,
                    provider: provider as any,
                    connectionId:  result.tenantId,
                    connected: true,
               },
          });

          const response = new NextResponse(
               `<html><body>
                <h2>✓ Connected!</h2>
                <p><strong>${escapeHtml(result.plugin)}</strong> is now connected to your Orbit account.</p>
                <p><a href="/settings">Back to settings</a></p>
            </body></html>`,
               { status: 200, headers: { 'Content-Type': 'text/html' } },
          );
          response.cookies.delete('oauth_state');
          
          return response;

     } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          const response = new NextResponse(
               `<html><body><h2>OAuth error</h2><p>${escapeHtml(message)}</p><p><a href="/settings">Back to settings</a></p></body></html>`,
               { status: 500, headers: { 'Content-Type': 'text/html' } },
          );
          response.cookies.delete('oauth_state');
          return response;
     }
}