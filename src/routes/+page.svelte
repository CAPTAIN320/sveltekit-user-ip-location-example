<script lang='ts'>
	import type { PageData } from "./$types";
	export let data: PageData;
	const clientIP: string = data.body?.clientIP!;
	const clientCountry: string = data.body?.country;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte User IP demo app" />
</svelte:head>

<div>
	<p>Client IP Address: {clientIP}</p>
	<p>IP Location: {clientCountry}</p>
	{#if clientIP === '::1'}
		<p>Note: IP of "::1" means you are running on localhost.</p>
		<p>Deploy to server to see true IP.</p>
	{/if}
	{#if clientCountry === 'undefined'}
		<p>Note: If location is "undefined" add ipinfo.io API Key</p>
	{/if}
</div>
