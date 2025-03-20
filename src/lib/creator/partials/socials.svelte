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
			icon: '/icons/brand-github.svg'
		},
		{
			name: 'youtube',
			icon: '/icons/brand-youtube.svg'
		},
		{
			name: 'linkedin',
			icon: '/icons/brand-linkedin.svg'
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

	function getSocialIcon(platformName: string) {
		// Convert the platform name to lowercase for case-insensitive matching
		const platform = platformName.toLowerCase();

		// Use switch case to return the appropriate icon path
		switch (platform) {
			case 'facebook':
				return '/icons/brand-facebook.svg';
			case 'instagram':
				return '/icons/brand-instagram.svg';
			case 'x':
				return '/icons/brand-x.svg';
			case 'bluesky':
				return '/icons/brand-bluesky.svg';
			case 'itchio':
				return '/icons/brand-itchio.svg';
			case 'mastodon':
				return '/icons/brand-mastodon.svg';
			case 'discord':
				return '/icons/brand-discord.svg';
			case 'github':
				return '/icons/brand-github.svg';
			case 'youtube':
				return '/icons/brand-youtube.svg';
			case 'linkedin':
				return '/icons/brand-linkedin.svg';
			case 'medium':
				return '/icons/brand-medium.svg';
			case 'website':
				return '/icons/website.svg';
			case 'email':
				return '/icons/email.svg';
			case 'link':
				return '/icons/link.svg';
			default:
				// Default icon if no match is found
				return '/icons/link.svg';
		}
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
				class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-200 hover:bg-primary-100 hover:text-primary-600"
				title={social.platform}
				aria-label={`Go to ${social.platform}`}
			>
				<img class="h-5 w-5" src={icon} alt={social.platform} />
			</a>
		{/each}
	</div>
{/if}
