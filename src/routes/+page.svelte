<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class='hero h-full flex flex-1 justify-center items-center'>
	<div class='max-w-md'>
		<h1 class='text-5xl font-bold'>DDQL's Amazon Music Manager</h1>
		<p class='py-6'>You can manage your playlist more effectively with DDQL's Amazon Music Manager.</p>
		<a role='button' class='btn btn-primary' href='/login'>Get Started</a>
	</div>
</div>