# sveltekit-user-ip-location

## Getting Started

1. Clone the repo

```bash
git clone https://github.com/CAPTAIN320/sveltekit-user-ip-location-example.git
```

2. Enter the directory

```bash
cd sveltekit-user-ip-location-example
```

3. Install packages

```bash
npm install
```

4. Run the app

```bash
npm run dev
```

(Optional)

5. Create .env file from .env.template.

6. Get API key from ipinfo.io and paste as IPINFO_API_KEY in the .env file.

### How It Works
This app uses SvelteKit to create a simple webpage that displays the user's IP address and their estimated location based on that IP. Here's an overview of how it works:

1. When a user visits the webpage, a request is made from the client to the server.

2. On the server, the server-side code retrieves the user's IP address from the client request headers.

3. The server then sends a request to the ipinfo.io API to get location information based on the user's IP address.

4. The location information (in this case country) is displayed on the webpage.
