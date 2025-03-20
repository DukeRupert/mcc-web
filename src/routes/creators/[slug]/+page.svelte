<script lang="ts">
	import Helmet from './helmet.svelte'
    import Profile from '$lib/creator/profile.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { creator } = data;
</script>

<Helmet {creator} />
<Profile {creator} />
