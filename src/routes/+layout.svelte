<script lang="ts">
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import { PUBLIC_LWA_CLIENT_ID } from '$env/static/public';

	let amazonroot: HTMLDivElement;

	onMount(() => {
		var a = document.createElement('script');
		a.type = 'text/javascript';
		a.async = true;
		a.id = 'amazon-login-sdk';
		a.src = 'https://assets.loginwithamazon.com/sdk/na/login1.js';
		amazonroot.appendChild(a);

		window.onAmazonLoginReady = function () {
			window.amazon.Login.setClientId(PUBLIC_LWA_CLIENT_ID);
		};
	});
</script>

<div class="flex flex-col min-h-screen">
	<div bind:this={amazonroot} />
	<Header />

	<slot />

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style lang="postcss">
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
