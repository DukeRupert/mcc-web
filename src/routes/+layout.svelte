<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';
	let { children } = $props();
</script>

<Navbar />
<main class="py-10">
	<div class="px-4 sm:px-6 lg:px-8">
		{@render children()}
	</div>
</main>
