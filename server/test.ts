// import 'dotenv/config';
// import { corsair } from './corsair';

// /**
//  * Test Gmail API with Corsair
//  * Tests fetching messages from connected Gmail account
//  */
// async function testGmailAPI(tenantId: string) {
//   try {
//     console.log('\n🔍 Testing Gmail API...');
//     console.log(`📧 Tenant ID: ${tenantId}`);
//     console.log('-----------------------------------\n');

//     // Test 1: List messages
//     console.log('✅ Test 1: Fetching Gmail messages...');
//     const messagesResult = await corsair
//       .withTenant(tenantId)
//       .gmail.api.messages.list({
//         maxResults: 5,
//       });

//     console.log(`📬 Found ${messagesResult.messages?.length || 0} messages:`);
//     if (messagesResult.messages && messagesResult.messages.length > 0) {
//       messagesResult.messages.forEach((msg, index) => {
//         console.log(`   ${index + 1}. Message ID: ${msg.id}`);
//       });
//     }

//     // Test 2: Get message details
//     if (messagesResult.messages && messagesResult.messages.length > 0) {
//       console.log('\n✅ Test 2: Fetching message details...');
//       const firstMessageId = messagesResult.messages[0].id;

//       const messageDetails = await corsair
//         .withTenant(tenantId)
//         .gmail.api.messages.get({
//           id: firstMessageId!,
//         });

//       console.log(`\n📄 Message Details:`);
//       console.log(`   ID: ${messageDetails.id}`);
//       console.log(`   Thread ID: ${messageDetails.threadId}`);
//       console.log(`   Label IDs: ${messageDetails.labelIds?.join(', ') || 'None'}`);
//     }

//     // Test 3: Get Gmail profile
//     console.log('\n✅ Test 3: Fetching Gmail profile...');
//     const profileResult = await corsair
//       .withTenant(tenantId)
//       .gmail.api.threads.trash({id : 'me'})

//    console.log(`\n👤 Gmail Profile:`);
// //     console.log(`   Email Address: ${profileResult.emailAddress}`);
// //     console.log(`   Total Messages: ${profileResult.messagesTotal || 0}`);
// //     console.log(`   Unread Messages: ${profileResult.messagesUnread || 0}`);
// //     console.log(`   Threads: ${profileResult.threadsTotal || 0}`);

//     // Test 4: List labels
//     console.log('\n✅ Test 4: Fetching Gmail labels...');
//     const labelsResult = await corsair
//       .withTenant(tenantId)
//       .gmail.api.labels.list({
//         userId: 'me',
//       });

//     console.log(`\n🏷️  Labels (${labelsResult.labels?.length || 0}):`);
//     if (labelsResult.labels) {
//       labelsResult.labels.slice(0, 5).forEach((label) => {
//         console.log(`   - ${label.name} (ID: ${label.id})`);
//       });
//       if (labelsResult.labels.length > 5) {
//         console.log(`   ... and ${labelsResult.labels.length - 5} more`);
//       }
//     }

//     console.log('\n✨ All Gmail API tests passed!\n');
//     return { success: true, data: { messages: messagesResult, profile: profileResult } };
//   } catch (error) {
//     console.error('\n❌ Gmail API test failed!');
//     console.error('Error:', error instanceof Error ? error.message : String(error));
//     if (error instanceof Error && error.cause) {
//       console.error('Cause:', error.cause);
//     }
//     return { success: false, error };
//   }
// }

// /**
//  * Test Calendar API with Corsair
//  * Tests fetching events from connected Google Calendar
//  */
// async function testCalendarAPI(tenantId: string) {
//   try {
//     console.log('\n🔍 Testing Google Calendar API...');
//     console.log(`📅 Tenant ID: ${tenantId}`);
//     console.log('-----------------------------------\n');

//     // Test 1: List events
//     console.log('✅ Test 1: Fetching calendar events...');
//        const eventsResult = await corsair
//             .withTenant(tenantId)
//             .googlecalendar.api.events.getMany({ calendarId: "primary" });

//     console.log(`📅 Found ${eventsResult.items?.length || 0} events:`);
//     if (eventsResult.items && eventsResult.items.length > 0) {
//       eventsResult.items.forEach((event : any, index : any) => {
//         console.log(`   ${index + 1}. ${event.summary || '(No title)'} - ${event.start?.dateTime || event.start?.date}`);
//       });
//     }

//     console.log('\n✨ All Calendar API tests passed!\n');
//     return { success: true, data: { events: eventsResult } };
//   } catch (error) {
//     console.error('\n❌ Calendar API test failed!');
//     console.error('Error:', error instanceof Error ? error.message : String(error));
//     if (error instanceof Error && error.cause) {
//       console.error('Cause:', error.cause);
//     }
//     return { success: false, error };
//   }
// }

// /**
//  * Main test runner
//  * Usage: npx tsx server/test.ts
//  * Set TEST_TENANT_ID env var or update below with actual tenant ID
//  */
// async function main() {
//   const tenantId = process.env.TEST_TENANT_ID || 'vishal';

//   if (!tenantId) {
//     console.error('❌ No tenant ID provided. Set TEST_TENANT_ID environment variable.');
//     process.exit(1);
//   }

//   console.log('\n=== Orbit Integration Tests ===');
//   console.log('Testing Corsair integration with Gmail and Google Calendar\n');

//   // Run Gmail tests
//   const gmailResult = await testGmailAPI(tenantId);

//   // Uncomment to test Calendar API
//   // const calendarResult = await testCalendarAPI(tenantId);

//   // Summary
//   console.log('\n=== Test Summary ===');
//   console.log(`✓ Gmail Tests: ${gmailResult.success ? 'PASSED ✅' : 'FAILED ❌'}`);
//   // console.log(`✓ Calendar Tests: ${calendarResult.success ? 'PASSED ✅' : 'FAILED ❌'}`);

//   process.exit(gmailResult.success ? 0 : 1);
// }

// // Run the tests
// main();

