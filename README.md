# sveltekit-user-ip-location

## Getting Started

```bash
git clone https://github.com/CAPTAIN320/sveltekit-user-ip-location-example.git
```

```bash
cd sveltekit-user-ip-location-example
```

```bash
npm install
```

```bash
npm run dev
```

### How It Works
This app uses SvelteKit to create a simple webpage that displays the user's IP address and their estimated location based on that IP. Here's an overview of how it works:

1. When a user visits the webpage, a request is made from the client to the server.

2. On the server, the server-side code retrieves the user's IP address from the client request headers.

3. The server then sends a request to the ipinfo.io API to get location information based on the user's IP address.

4. The location information (in this case country) is displayed on the webpage.
