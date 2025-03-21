<script lang="ts">
	import { Badge } from 'flowbite-svelte';
	interface Props {
		status: string
	}

	let { status }: Props = $props();
</script>

{#if status === 'available'}
	<Badge color="green" large>Available</Badge>
{:else if status === 'in_progress'}
	<Badge color="blue" large>In Progress</Badge>
{:else if status === 'coming_soon'}
	<Badge color="pink" large>Coming Soon</Badge>
{:else if status === 'archive'}
	<Badge color="dark" large>Archive</Badge>
{:else}
	<Badge large>Unknown</Badge>
{/if}
