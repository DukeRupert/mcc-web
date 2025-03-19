<script lang="ts">
    import type { Creator } from "$lib/directus/types";
    import Image from "$lib/directus/image.svelte";
    interface Props {
        creator: Creator
    }
    let { creator }: Props = $props()
</script>

{#if creator.avatar}
	<figure class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
		<Image
			className="h-9 w-9 rounded-full"
			id={creator.avatar.id}
			alt={creator.title}
			height={creator.avatar.height}
			width={creator.avatar.width}
			key="avatar"
		/>
		<figcaption class="space-y-0.5 text-left font-medium dark:text-white">
			<div>{creator.title}</div>
		</figcaption>
	</figure>
{/if}
