<script lang="ts">
	import { page } from '$app/state';
	import { Head, SchemaOrg } from 'svead';
	import type { SeoConfig, SchemaOrgProps } from 'svead';
	import { Card, Heading, P } from 'flowbite-svelte';
	import Header from '$lib/page/head.svelte';
	import Cta from '$lib/page/cta.svelte';

	const title =
		'TTRPG Designers & Creators | The Manifold Creator Collective Team | Draw Steel & Tabletop RPG Experts';
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
<Card class="w-full" size="xl" padding="md">
	<!-- Details section -->
	<section aria-labelledby="details-heading">
		<div class="flex flex-col items-center text-center">
			<Heading tag="h2" id="details-heading" class="text-3xl font-bold tracking-tight sm:text-4xl">
				What We Do
			</Heading>
			<P class="mt-3 max-w-3xl text-lg">
				Our collective brings together talent from across the TTRPG industry to create memorable
				gaming experiences through collaboration and shared expertise.
			</P>
		</div>
		<div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
			<div>
				<img
					src="https://images.unsplash.com/photo-1708863828286-63b56b08f292?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Game designers working on tabletop RPG materials and maps."
					class="aspect-3/2 w-full rounded-lg object-cover"
				/>
				<Heading tag="h3" class="mt-4 font-medium">Game Design & Writing</Heading>
				<P class="mt-8 text-base">
					Our collective brings together creative minds crafting innovative game mechanics and
					talented writers weaving compelling narratives. We focus on building systems that engage
					players while telling memorable stories through thoughtful worldbuilding and character
					development.
				</P>
			</div>
			<div>
				<img
					src="https://images.unsplash.com/photo-1549056630-ee2626bb5ad5?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Game masters and playtesters at a table playing a tabletop RPG."
					class="aspect-3/2 w-full rounded-lg object-cover"
				/>
				<Heading tag="h3" class="mt-4 font-medium">Editing & Playtesting</Heading>
				<P class="mt-8 text-base">
					Detail-oriented editors refine and polish game materials while experienced playtesters
					provide valuable feedback on gameplay and mechanics. We believe that rigorous testing and
					professional-quality presentation are crucial to creating games that stand the test of
					time.
				</P>
			</div>
		</div>
	</section>
</Card>
<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-primary-600 dark:text-primary-500 text-base leading-7 font-semibold">
				Our Community
			</h2>
			<p
				class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100"
			>
				Who We Are
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
				A Diverse Community of Creators
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-3xl sm:mt-20">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<div class="mt-4 space-y-6 text-base leading-7 text-gray-600 dark:text-gray-300">
					<p>
						The Manifold Creator Collective brings together diverse talents from across the tabletop
						roleplaying game industry. Our members include published game designers, experienced
						GMs, professional editors, artists, and passionate players.
					</p>
					<p>
						We believe that the best games emerge from collaboration, constructive feedback, and
						shared expertise. Our collective represents a wide range of perspectives, design
						philosophies, and creative approaches to TTRPGs.
					</p>
					<p>
						Whether you're working on your first indie game or you're a seasoned designer, the MCC
						provides a supportive environment to develop your craft and connect with fellow creators
						who share your passion for tabletop roleplaying games.
					</p>
				</div>
				<div class="mt-10 flex">
					<a
						href="/creators"
						class="text-primary-600 dark:text-primary-500 text-base leading-7 font-semibold"
					>
						Meet our members <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<Cta />
