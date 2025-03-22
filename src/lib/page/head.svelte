<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	interface Props {
		eyebrow?: string;
		title?: string;
		description?: string;
	}

	let {
		eyebrow = 'Default Eyebrow',
		title = 'Default Title',
		description = 'Default Description'
	}: Props = $props();
</script>

<!-- Page Header Section -->
<section class="relative overflow-hidden">
	<div class="px-6 py-24 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<P class="text-primary-600 dark:text-primary-500 text-center font-semibold">{eyebrow}</P>
			<Heading tag="h1" class="mt-2 tracking-tight">{title}</Heading>
			<P class="mt-8 text-center font-medium">{description}</P>
		</div>
	</div>
</section>

