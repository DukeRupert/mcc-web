<script lang="ts">
	import Helmet from './helmet.svelte';
    import Single from '$lib/post/single.svelte'
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { post } = data;
	$inspect(post)
</script>

<Helmet {post} />
<Single {post} />