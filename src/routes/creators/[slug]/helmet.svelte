<script lang="ts">
	import { page } from '$app/state';
    import type { SeoConfig, SchemaOrgProps } from 'svead';
    import { getAssetUrl } from '$lib/directus/helper';
    import type { Creator } from '$lib/directus/types/index';
    import { Head, SchemaOrg } from 'svead';
    
	interface Props {
		creator: Creator;
	}
	let { creator }: Props = $props();

	let open_graph_image = '';
	if (creator.avatar?.id) {
		open_graph_image = getAssetUrl(creator.avatar.id, { width: 1200, height: 630 });
	}
    let bio = '';
    if (creator?.bio) {
        bio = creator.bio
    }
	// Seo
	let seo_config: SeoConfig = {
		title: creator.title,
		description: bio,
		url: page.url.href,
		open_graph_image: open_graph_image
	};

	let schema_org: SchemaOrgProps['schema'] = {
		'@type': 'WebPage',
		name: creator.title,
		description: bio,
		url: page.url.href
	};
</script>

<Head {seo_config} />
<SchemaOrg schema={schema_org} />