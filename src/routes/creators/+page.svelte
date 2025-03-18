<script lang="ts">
	import List from '$lib/creator/list.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { creators } = data;
</script>

<List {creators} />
