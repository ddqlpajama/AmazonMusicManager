<script lang="ts">
	import github from '$lib/images/github.svg';

	interface NavLink {
		label: string;
		href: string;
	}

	const navLinks: NavLink[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' }
	];
</script>

<div class="navbar bg-base-100 justify-between">
	<div class="flex-1">
		<p class="normal-case text-xl">DDQL's Amazon Music Manager</p>
	</div>
	<div class="w-1/6 flex-row justify-between">
		{#each navLinks as navLink}
			<a role="button" class="font-semibold hover:underline" href={navLink.href}>{navLink.label}</a>
		{/each}
	</div>
	<div class="flex-1 justify-end">
		<a class="w-10" href="https://github.com/ddqlpajama/Classi-liszt">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</div>

<style lang="postcss">
</style>
