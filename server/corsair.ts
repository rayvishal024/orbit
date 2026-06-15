import {createCorsair } from 'corsair';
import { gmail } from '@corsair-dev/gmail';
import { googlecalendar } from '@corsair-dev/googlecalendar';

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
     connectionString: process.env.DATABASE_URL,
});

export const corsair = createCorsair({
     plugins: [gmail({ authType: "oauth_2" }), googlecalendar({ authType: "oauth_2" })],
     database: pool,
     kek: process.env.CORSAIR_API_KEY!,
     multiTenancy: true,
});



