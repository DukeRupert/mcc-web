<script lang="ts">
	import Helmet from '$lib/post/partials/helmet.svelte';
    import Single from '$lib/post/single.svelte'
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { post } = data;
</script>

<Helmet {post} />
<Single {post} />