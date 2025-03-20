<script lang="ts">
	import { page } from '$app/state';
    import type { SeoConfig, SchemaOrgProps } from 'svead';
    import { getAssetUrl } from '$lib/directus/helper';
    import type { Post } from '$lib/directus/types/index';
    import { Head, SchemaOrg } from 'svead';
    
	interface Props {
		post: Post;
	}
	let { post }: Props = $props();

	let open_graph_image = '';
	if (post.image?.id) {
		open_graph_image = getAssetUrl(post.image.id, { width: 1200, height: 630 });
	}
	// Seo
	let seo_config: SeoConfig = {
		title: post.title,
		description: post.description,
		url: page.url.href,
		open_graph_image: open_graph_image
	};

	let schema_org: SchemaOrgProps['schema'] = {
		'@type': 'WebPage',
		name: post.title,
		description: post.description,
		url: page.url.href
	};
</script>

<Head {seo_config} />
<SchemaOrg schema={schema_org} />
