<script lang="ts">
	import { page } from '$app/state';
	import { Head, SchemaOrg } from 'svead';
	import type { SeoConfig, SchemaOrgProps } from 'svead';
	import Search from '$lib/page/search.svelte';
	import List from '$lib/post/list.svelte';
	import Pagination from '$lib/page/pagination.svelte';
	import type { PageProps } from './$types';
	let p: PageProps = $props();
	let posts = $derived(p.data.posts)

	const title = 'The Manifold | TTRPG Design Collective for Draw Steel & Tabletop RPGs | MCC';
	const description = `The Manifold Creator Collective (MCC) unites passionate TTRPG designers developing content for Draw Steel and diverse tabletop roleplaying games. Our community showcases original creations, facilitates playtesting, offers professional design services, and shares expert resources. From established designers to newcomers, MCC provides tools, collaboration opportunities, and industry connections to advance your TTRPG projects. Join The Manifold and shape the future of tabletop gaming through our collaborative design community.`;
	const url = page.url.href;

	const seo_config: SeoConfig = {
		title: title,
		description: description,
		url: url
	};

	const schema_org: SchemaOrgProps['schema'] = {
		'@type': 'WebPage',
		name: title,
		description: description,
		url: url
	};
</script>

<Head {seo_config} />
<SchemaOrg schema={schema_org} />
<Search debounceTime={1500} />
<List {posts} />
<!-- <Pagination pagination={p.data.pagination} total={p.data.total} /> -->
