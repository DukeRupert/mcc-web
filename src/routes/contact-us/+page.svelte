<script lang="ts">
	import { page } from '$app/state';
	import { Head, SchemaOrg } from 'svead';
	import type { SeoConfig, SchemaOrgProps } from 'svead';
	import Header from '$lib/page/head.svelte';

	const title =
		'Contact The Manifold Creator Collective | TTRPG Design Services & Collaboration | Draw Steel Support';
	const description = `Connect with The Manifold Creator Collective for TTRPG design services, Draw Steel collaborations, and tabletop RPG project inquiries. Our team of experienced creators offers custom content development, playtesting coordination, editing services, and design consultations. Whether you're seeking to commission work, join our collective, or discuss partnership opportunities, reach out through our simple contact form. Get direct access to our TTRPG design experts and start your creative collaboration with The Manifold today.`;
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
		eyebrow: 'Get In Touch',
		title: 'Contact The Manifold',
		description:
			"Reach out to The Manifold Creator Collective for TTRPG design collaborations, Draw Steel content inquiries, or to connect with our community of tabletop gaming creators—we're ready to discuss your creative vision and explore new possibilities together."
	};
</script>

<Head {seo_config} />
<SchemaOrg schema={schema_org} />
<Header {...header} />
