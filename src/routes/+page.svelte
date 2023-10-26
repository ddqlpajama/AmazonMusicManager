<script lang="ts">
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
		<form method="post" action="/api/login">
			<button class="btn btn-primary"> Get Started </button>
		</form>
	</div>
</div>
