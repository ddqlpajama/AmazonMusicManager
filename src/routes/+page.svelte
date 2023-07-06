<script lang="ts">
	const handleAmazonLoginClicked = () => {
		const byteArray = new Uint8Array(32);
		crypto.getRandomValues(byteArray);
		const state = Array.from(byteArray)
			.map((byte) => byte.toString(16).padStart(2, '0'))
			.join('');

		let options = {
			scope: 'profile',
			response_type: 'code',
			state: state,
			redirect_uri: 'localhost:5173/api/login'
		};
		window.amazon.Login.authorize(options, async (response: any) => {
			if (response.error) {
				alert('oauth error ' + response.error);
				return;
			}
			if (response.state != state) {
				alert('CSRF attempt detected');
				return;
			}

			const loginResponse = await fetch('/api/login', {
				method: 'POST',
				body: response.code,
				headers: {
					'content-type': 'text/plain'
				}
			});

			console.log(await loginResponse.json());
		});
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
