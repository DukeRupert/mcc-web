<script lang="ts">
	import { page } from '$app/state';
	import { Head, SchemaOrg } from 'svead';
	import type { SeoConfig, SchemaOrgProps } from 'svead';
	import Header from '$lib/page/head.svelte';
	import List from '$lib/creator/list.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { creators } = data;

	const title =
		'TTRPG Creators & Designers | Meet The Manifold Creator Collective | Draw Steel & Tabletop RPG Experts';
	const description = `Discover the talented TTRPG creators and designers behind The Manifold Creator Collective. Our diverse team brings expertise in Draw Steel and various tabletop roleplaying games, offering unique perspectives and creative innovations. Each creator contributes specialized skills in game mechanics, worldbuilding, narrative design, and visual storytelling. Explore our members' profiles, browse their published works, and connect with the creative minds shaping the future of tabletop gaming. Whether you're looking for collaboration opportunities or seeking design inspiration, meet the passionate creators driving The Manifold's mission in the TTRPG community.`;
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

	const header = {
		eyebrow: 'Our Team',
		title: 'Meet The Manifold Creators',
		description:
			'Connect with the diverse talent behind The Manifold Creator Collective—skilled TTRPG designers, artists, and innovators crafting exceptional content for Draw Steel and tabletop roleplaying games.'
	};
</script>

<Head {seo_config} />
<SchemaOrg schema={schema_org} />
<Header {...header} />
<List {creators} />
