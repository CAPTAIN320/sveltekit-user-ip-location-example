import { SvelteKitAuth } from "@auth/sveltekit";

export let requestIp: string;

export const handle = async ({ event, resolve }) => {
  try {
    requestIp = event.getClientAddress(); // IP from Client Request
    console.log('IP Address from Client Request: ', requestIp);
  } catch (error) {
    console.log('Error reading IP');
  }

  // Return the requestIp along with the authentication result
  const authResult: any = await SvelteKitAuth({
    resolve,
  })({ event, resolve });
  authResult.requestIp = requestIp;

  return authResult;
};

export default handle;
