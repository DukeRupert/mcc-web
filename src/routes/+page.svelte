<script lang="ts">
	import { page } from '$app/state'
	import { Head, SchemaOrg } from 'svead';
	import type { SeoConfig, SchemaOrgProps } from 'svead';
	import List from '$lib/post/list.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { posts } = data;

	const title = 'The Manifold | TTRPG Design Collective for Draw Steel & Tabletop RPGs | MCC';
	const description = `The Manifold Creator Collective (MCC) unites passionate TTRPG designers developing content for Draw Steel and diverse tabletop roleplaying games. Our community showcases original creations, facilitates playtesting, offers professional design services, and shares expert resources. From established designers to newcomers, MCC provides tools, collaboration opportunities, and industry connections to advance your TTRPG projects. Join The Manifold and shape the future of tabletop gaming through our collaborative design community.`;
	const url = page.url.href

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
<List {posts} />
