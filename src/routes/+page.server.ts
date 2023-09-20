import { requestIp } from "../hooks.server";
import { IPINFO_API_KEY } from "$env/static/private";

const GET = async () => {
  try {
    const clientIP: string = requestIp;
    const response = await fetch(`https://ipinfo.io/${clientIP}?token=${IPINFO_API_KEY}`);
    const data = await response.json();
    const country = data.country;
    console.log('Client Country: ', country);

    return {
      status: 200, // OK
      body: {
        clientIP,
      },
    };
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

export const load = GET;
