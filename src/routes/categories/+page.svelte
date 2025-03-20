<script lang="ts">
	import { page } from '$app/state';
	import { Head, SchemaOrg } from 'svead';
	import type { SeoConfig, SchemaOrgProps } from 'svead';
	import Header from '$lib/page/head.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { categories } = data;
    $inspect(categories)

	const title =
		'TTRPG Content Library | The Manifold Creator Collective | Draw Steel & Tabletop RPG Resources';
	const description = `Explore The Manifold Creator Collective's comprehensive TTRPG content library featuring resources for Draw Steel and diverse tabletop roleplaying games. Discover our curated collection of designer posts, in-depth podcasts, instructional videos, original artwork, playable adventures, game analysis, design guides, and more. Each category showcases the expertise of our collective's creators, offering valuable tools and inspiration for TTRPG enthusiasts. Whether you're seeking creative inspiration, mechanical insights, or ready-to-play content, browse our organized library to find exactly what you need for your tabletop gaming experience. Access the full spectrum of MCC's creative output in one centralized resource hub.`;
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
        eyebrow: "Our Story",
        title: "About The Manifold",
        description: "Explore The Manifold Creator Collective's comprehensive TTRPG content library featuring resources for Draw Steel and diverse tabletop roleplaying games"
    }

</script>

<Head {seo_config} />
<SchemaOrg schema={schema_org} />
<Header {...header} />
