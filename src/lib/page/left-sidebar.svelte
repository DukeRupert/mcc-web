<script lang="ts">
	import type { SocialLink } from '$lib';
	import { Card, P, A } from 'flowbite-svelte';

	interface Props {
		y: number;
		innerHeight: number;
		socialLinks: SocialLink[];
	}

	let { socialLinks, y, innerHeight }: Props = $props();

	import { onMount } from 'svelte';

	// Props for the component
	let rotationSpeed: number = 1.5; // Increased to make oscillation more noticeable
	let minScale: number = 0.95; // Minimum scale factor
	let maxScale: number = 1.05; // Maximum scale factor
	let pulseFrequency: number = 0.5; // Controls how fast the pulse effect cycles
	let documentHeight = $state(0);

	// Calculated values for animation
	let scrollPercentage = $derived(Math.min(y / (documentHeight - innerHeight), 1) || 0);

	// Use sine function for oscillating left-right wiggle motion
	let rotation = $derived(scrollPercentage * rotationSpeed);

	// Calculate pulse effect using sine wave based on scroll position
	let pulsePhase = $derived(scrollPercentage * pulseFrequency * Math.PI * 2);
	let scaleFactor = $derived(minScale + ((Math.sin(pulsePhase) + 1) / 2) * (maxScale - minScale));

	// Get document height on mount
	onMount(() => {
		documentHeight = document.body.scrollHeight;
	});
</script>

<!-- left-sidebar: Hidden on small screens, max 25% width -->
<div class="fixed top-18 left-0 hidden h-[calc(100vh-72px)] overflow-y-auto md:block md:w-1/4">
	<div class="p-2">
		<Card color="primary" padding="md" class="mx-auto mt-2">
			<div class="flex flex-col items-center pb-4">
				<div class="scroll-animation-container">
					<div class="image-container">
						<picture>
							<source srcset="/logo/MCC_LOGO_200px.avif" type="image/avif" />
							<img
								src="/logo/MCC_LOGO_200px.png"
								alt="Animated on scroll"
								style="transform: rotate({rotation}deg) scale({scaleFactor}); transition: transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);"
								height="150"
								width="150"
							/>
						</picture>
					</div>
				</div>
				<div class="mt-4 flex space-x-3 lg:mt-6">
					<P
						>The Manifold Creator Collective (MCC) connects TTRPG designers creating content for
						Draw Steel and other tabletop games. We showcase original work, facilitate playtesting,
						offer design services, and share resources. Join The Manifold and help shape tabletop
						gaming's future.</P
					>
				</div>
				<div class="mt-6 flex flex-wrap justify-center gap-x-6 md:order-2">
					{#each socialLinks as social}
						<A
							href={social.url}
							class="hover:bg-primary-100 hover:text-primary-600 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-200"
						>
							<span class="sr-only">{social.name}</span>
							<img class="size-6" src={social.icon} alt={social.name} />
						</A>
					{/each}
				</div>
			</div>
		</Card>
	</div>
</div>

<style>
	.scroll-animation-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image-container {
		margin-bottom: 2rem;
	}

	img {
		max-width: 100%;
		height: auto;
		will-change: transform; /* Optimize for animation performance */
	}
</style>
