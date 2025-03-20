<script lang="ts">
    import Profile from '$lib/creator/profile.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { creator } = data;
</script>

<Profile {creator} />
