<script lang="ts">
	import Helmet from './helmet.svelte'
    import Profile from '$lib/creator/profile.svelte';
	import type { PageProps } from './$types';
	import Breadcrumbs from '$lib/page/breadcrumbs.svelte';
	let { data }: PageProps = $props();
	let { creator } = data;
</script>

<Helmet {creator} />
<Breadcrumbs />
<Profile {creator} />
