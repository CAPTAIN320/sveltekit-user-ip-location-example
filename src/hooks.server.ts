import { SvelteKitAuth } from "@auth/sveltekit";

export let requestIp: any;

export const handle = async ({ event, resolve }) => {
  requestIp = event.getClientAddress(); // IP from Client Request
  console.log('IP Address from Client Request: ', requestIp);

  // Return the requestIp along with the authentication result
  const authResult: any = await SvelteKitAuth({
    resolve,
  })({ event, resolve });

  return authResult;
};

export default handle;
