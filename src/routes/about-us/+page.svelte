<script lang="ts">
	import { page } from '$app/state';
	import { Head, SchemaOrg } from 'svead';
	import type { SeoConfig, SchemaOrgProps } from 'svead';
	import Header from '$lib/page/head.svelte';

	const title = 'TTRPG Designers & Creators | The Manifold Creator Collective Team | Draw Steel & Tabletop RPG Experts';
	const description = `Meet the talented TTRPG designers and creators of The Manifold Creator Collective. Our team brings diverse expertise in Draw Steel and tabletop roleplaying game design, including game mechanics specialists, worldbuilders, artists, writers, and playtest coordinators. Explore each creator's profile, discover their unique contributions to the TTRPG community, and connect with the innovative minds behind our collaborative projects. Find potential collaborators or commission custom content from our specialized Draw Steel and tabletop RPG design professionals.`;
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
		eyebrow: 'Our Collective',
		title: 'About The Manifold',
		description:
			'Discover The Manifold Creator Collective, a dynamic community of TTRPG designers and creators collaborating on innovative content for Draw Steel and tabletop roleplaying games.'
	};
</script>

<Head {seo_config} />
<SchemaOrg schema={schema_org} />
<Header {...header} />