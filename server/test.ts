import 'dotenv/config'
import { corsair } from './corsair'
import { getSessionTenantId } from '@/server/auth'

async function main() {
     const tenantId = "vishal";
     
     if(tenantId){
      const result = await corsair.withTenant(tenantId).gmail.api.messages.list({});

          console.log(result);
     }
     else {
          console.log("TenentID", tenantId);
     }
}
main();

