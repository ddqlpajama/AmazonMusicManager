<script lang="ts">
	import { GetAmazonLoginToken, type LoginRequestOptions } from '$lib/services/amazon/authService';

	const generateRandomString = (): string => {
		const byteArray = new Uint8Array(32);
		crypto.getRandomValues(byteArray);
		return Array.from(byteArray)
			.map((byte) => byte.toString(16).padStart(2, '0'))
			.join('');
	};

	const handleAmazonLoginClicked = () => {
		const state = generateRandomString();
		let options: LoginRequestOptions = {
			scope: 'profile',
			response_type: 'code',
			state: state
		};

		const loginToken = GetAmazonLoginToken(state, options);
		console.log(loginToken);
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="hero h-full flex flex-1 justify-center items-center">
	<div class="max-w-md">
		<h1 class="text-5xl font-bold">DDQL's Amazon Music Manager</h1>
		<p class="py-6">
			You can manage your playlist more effectively with DDQL's Amazon Music Manager.
		</p>
		<button class="btn btn-primary" on:click={handleAmazonLoginClicked}>Get Started</button>
	</div>
</div>
