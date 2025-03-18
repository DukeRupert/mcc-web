<script lang="ts">
	import type { Creator } from '$lib/directus/types';
	interface Props {
		creator: Creator;
	}

	let { creator }: Props = $props();

	const socialLinks = [
		{
			name: 'facebook',
			icon: '/icons/brand-facebook.svg'
		},
		{
			name: 'instagram',
			icon: '/icons/brand-instagram.svg'
		},
		{
			name: 'x',
			icon: '/icons/brand-x.svg'
		},
		{
			name: 'github',
			icon: '/icons/brand-github'
		},
		{
			name: 'youtube',
			icon: '/icons/brand-youtube'
		},
		{
			name: 'linkedin',
			icon: '/icons/brand-linkedin'
		},
		{
			name: 'medium',
			icon: '/icons/brand-medium.svg'
		},
		{
			name: 'website',
			icon: '/icons/website.svg'
		},
		{
			name: 'email',
			icon: '/icons/email.svg'
		},
		{
			name: 'link',
			icon: '/icons/link.svg'
		}
	];

	// Create a mapping between platform names and the creator's social URLs
	function getSocialIcon(platformName: string): string {
		let icon = '/icons/link.svg';
		// Find the corresponding icon from our socialLinks array
		const iconMatch = socialLinks.find(
			(link) => link.name.toLowerCase() === platformName.toLowerCase()
		);

		if (iconMatch) icon = iconMatch.icon;

		return icon;
	}
</script>

<!-- Social Links -->
{#if creator.socials && creator.socials.length > 0}
	<div class="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
		{#each creator.socials as social}
			{@const icon = getSocialIcon(social.platform)}
			<a
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-200 hover:bg-indigo-100 hover:text-indigo-600"
				title={social.platform}
				aria-label={`Go to ${social.platform}`}
			>
				<img class="h-5 w-5" src={icon} alt={social.platform} />
			</a>
		{/each}
	</div>
{/if}
