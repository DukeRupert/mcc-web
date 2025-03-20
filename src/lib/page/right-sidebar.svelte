<script lang="ts">
	import { Card, P, A } from 'flowbite-svelte';
</script>

<!-- Part 3: Only visible on large screens, max 15% width -->
<div class="fixed top-18 right-0 hidden h-[calc(100vh-72px)] overflow-y-auto lg:block lg:w-[20%]">
	<Card padding="md" class="mx-auto mt-2">
		<div class="p-2">Part 3 content</div>
	</Card>
</div>
