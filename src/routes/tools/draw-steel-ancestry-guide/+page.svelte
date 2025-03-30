<script lang="ts">
	import {
		Badge,
		Card,
		Heading,
		P,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { page } from '$app/state';
	import { Head, SchemaOrg } from 'svead';
	import type { SeoConfig, SchemaOrgProps } from 'svead';
	import Header from '$lib/page/head.svelte';
	const title = 'MCC - Draw Steel - Ancestry Guide';
	const description = `Discover the talented TTRPG creators and designers behind The Manifold Creator Collective. Our diverse team brings expertise in Draw Steel and various tabletop roleplaying games, offering unique perspectives and creative innovations. Each creator contributes specialized skills in game mechanics, worldbuilding, narrative design, and visual storytelling. Explore our members' profiles, browse their published works, and connect with the creative minds shaping the future of tabletop gaming. Whether you're looking for collaboration opportunities or seeking design inspiration, meet the passionate creators driving The Manifold's mission in the TTRPG community.`;
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
		eyebrow: 'Draw Steel',
		title: 'Ancestry Guide',
		description:
			'Explore the diverse ancestries of Draw Steel, from Devils with silver tongues to time-traveling Raiders. Discover signature abilities, purchasable traits, and the rich lore behind each playable ancestry in this comprehensive guide for players.'
	};
</script>

<Head {seo_config} />
<SchemaOrg schema={schema_org} />
<Header {...header} />
<div class="mb-6 flex flex-wrap gap-2">
	<Badge large href="#devil" rounded color="red">Devil</Badge>
	<Badge large href="#dragon-knight" rounded color="purple">Dragon Knight</Badge>
	<Badge large href="#dwarf" rounded color="dark">Dwarf</Badge>
	<Badge large href="#elf-wode" rounded color="green">Wode Elf</Badge>
	<Badge large href="#elf-high" rounded color="yellow">High Elf</Badge>
	<Badge large href="#hakaan" rounded color="indigo">Hakaan</Badge>
	<Badge large href="#human" rounded>Human</Badge>
	<Badge large href="#memonek" rounded color="purple">Memonek</Badge>
	<Badge large href="#orc" rounded color="green">Orc</Badge>
	<Badge large href="#polder" rounded color="dark">Polder</Badge>
	<Badge large href="#revenant" rounded color="indigo">Revenant</Badge>
	<Badge large href="#time-raider" rounded color="pink">Time Raider</Badge>
</div>
<div class="grid grid-cols-1 gap-6">
	<!-- Devil -->
	<Card id="devil" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Devil</Heading>
			<P>
				Colourful social creatures that hail from hell, though most Devils in Orden are descendants
				of hellish bureaucrats that were stranded while performing their duties.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow class="signature">
					<TableBodyCell class="trait-type">Signature</TableBodyCell>
					<TableBodyCell class="trait-name">Silver Tongue</TableBodyCell>
					<TableBodyCell class="trait-effect">Social skill, bonus to Negotiation</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow class="signature">
					<TableBodyCell class="trait-type">Signature</TableBodyCell>
					<TableBodyCell class="trait-name">Purchased Traits (3)</TableBodyCell>
					<TableBodyCell class="trait-effect">3 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow class="one-point">
					<TableBodyCell class="trait-type">1 Pt</TableBodyCell>
					<TableBodyCell class="trait-name">Barbed Tail</TableBodyCell>
					<TableBodyCell class="trait-effect">Extra damage on melee</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow class="one-point">
					<TableBodyCell class="trait-type">1 Pt</TableBodyCell>
					<TableBodyCell class="trait-name">Beast Legs</TableBodyCell>
					<TableBodyCell class="trait-effect">Extra speed</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow class="one-point">
					<TableBodyCell class="trait-type">1 Pt</TableBodyCell>
					<TableBodyCell class="trait-name">Glowing Eyes</TableBodyCell>
					<TableBodyCell class="trait-effect">Retaliation damage</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow class="one-point">
					<TableBodyCell class="trait-type">1 Pt</TableBodyCell>
					<TableBodyCell class="trait-name">Hellsight</TableBodyCell>
					<TableBodyCell class="trait-effect">Anti-concealment vision</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow class="two-points">
					<TableBodyCell class="trait-type">2 Pts</TableBodyCell>
					<TableBodyCell class="trait-name">Impressive Horns</TableBodyCell>
					<TableBodyCell class="trait-effect">Boost to Saving Throws</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow class="two-points">
					<TableBodyCell class="trait-type">2 Pts</TableBodyCell>
					<TableBodyCell class="trait-name">Prehensile Tail</TableBodyCell>
					<TableBodyCell class="trait-effect">Cannot be Flanked</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow class="two-points">
					<TableBodyCell class="trait-type">2 Pts</TableBodyCell>
					<TableBodyCell class="trait-name">Wings</TableBodyCell>
					<TableBodyCell class="trait-effect">Flight!</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Dragon Knight -->
	<Card id="dragon-knight" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Dragon Knight</Heading>
			<P>
				The Dragon Knights of Vasloria were made to be the unfaltering peacekeepers of Good King
				Omund. With Omund gone and the usurper Ajax in power, every single one of them has a price
				on their head.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Wyrmplate</TableBodyCell>
					<TableBodyCell>Elemental resistances</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (3)</TableBodyCell>
					<TableBodyCell>3 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Draconian Guard</TableBodyCell>
					<TableBodyCell>You or an ally reduce incoming damage</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Prismatic Scales</TableBodyCell>
					<TableBodyCell>+1 Wyrmplate</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Remember Your Oath</TableBodyCell>
					<TableBodyCell>Boost to Saving Throws</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Draconian Pride</TableBodyCell>
					<TableBodyCell>Roar: AoE damage and push</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Dragon Breath</TableBodyCell>
					<TableBodyCell>AoE elemental damage</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Wings</TableBodyCell>
					<TableBodyCell>Flight!</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Dwarf -->
	<Card id="dwarf" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Dwarf</Heading>
			<P>
				The last of Ord's dwarven children on Orden, Stone Dwarves are great builders and
				stoneworkers of the world. Themselves made of stone, they are hardy and stable. Amicable
				creatures, the rivalry between dwarves and elves is largely imagined by outsiders.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Runic Carving</TableBodyCell>
					<TableBodyCell>Utility rune (search radar, flashlight, walkie talkie)</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (3)</TableBodyCell>
					<TableBodyCell>3 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Grounded</TableBodyCell>
					<TableBodyCell>Increased stability</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Stand Tough</TableBodyCell>
					<TableBodyCell>Improved Might-based potency resistance</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Stone Singer</TableBodyCell>
					<TableBodyCell>Short-ranged geomancy</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Great Fortitude</TableBodyCell>
					<TableBodyCell>Cannot be weakened</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Spark Off Your Skin</TableBodyCell>
					<TableBodyCell>Extra Stamina</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Wode Elf -->
	<Card id="elf-wode" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Elf, Wode</Heading>
			<P>
				Protectors of elf-haunted forests, with bat-ears and large eyes and a Fae reputation to
				uphold. Their names are fantasy-Welsh.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Wode Elf Glamour</TableBodyCell>
					<TableBodyCell>Extra sneaky</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (3)</TableBodyCell>
					<TableBodyCell>3 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Forest Walk</TableBodyCell>
					<TableBodyCell>Can shift into difficult terrain</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Revisit Memory</TableBodyCell>
					<TableBodyCell>Edge on tests to recall lore</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Swift</TableBodyCell>
					<TableBodyCell>Extra speed</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Otherworldly Grace</TableBodyCell>
					<TableBodyCell>Boost to Saving Throws</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>The Wode Defends</TableBodyCell>
					<TableBodyCell>Summon vines to slow and restrain</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- High Elf -->
	<Card id="elf-high" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Elf, High</Heading>
			<P>
				Collectors of lore and art, creatures of emotion that runs deep and true. Each high elf
				takes a phrasal name, a snapshot of a single moment in time, a feeling, a sight, a smell.
				Real silver or gold seems to ripple across their skin.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>High Elf Glamour</TableBodyCell>
					<TableBodyCell>Extra amiable</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (3)</TableBodyCell>
					<TableBodyCell>3 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Graceful Retreat</TableBodyCell>
					<TableBodyCell>Extra movement on Disengage</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>High Senses</TableBodyCell>
					<TableBodyCell>Boost to Awareness skill</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Revisit Memory</TableBodyCell>
					<TableBodyCell>Edge on tests to recall lore</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Otherworldly Grace</TableBodyCell>
					<TableBodyCell>Boost to Saving Throws</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Unstoppable Mind</TableBodyCell>
					<TableBodyCell>Cannot be dazed</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Hakaan -->
	<Card id="hakaan" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Hakaan</Heading>
			<P>
				Descended from Stone Giants of old, hakaan are large and sturdy creatures. Some of them
				foresee their deaths, and go gloriously toward their destiny.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Big!</TableBodyCell>
					<TableBodyCell>Increased Size</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (3)</TableBodyCell>
					<TableBodyCell>3 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>All is a Feather</TableBodyCell>
					<TableBodyCell>Boost to Lift skill</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Forceful</TableBodyCell>
					<TableBodyCell>Boost to forced movement</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Stand Tough</TableBodyCell>
					<TableBodyCell>Improved Might-based potency resistance</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Great Fortitude</TableBodyCell>
					<TableBodyCell>Cannot be weakened</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Doomsight</TableBodyCell>
					<TableBodyCell
						>Your death is foretold and it will be glorious; until then you do not die</TableBodyCell
					>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Human -->
	<Card id="human" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Human</Heading>
			<P>
				Known for their belief in the impossible, indefatigable hope, and penchant for bringing folk
				together to make things happen. Humans are inextricably linked to the land, with a sense for
				items and creatures not of the world, a natural resistance to the supernatural, and an
				unmatched ability to press onward.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Detect the Supernatural</TableBodyCell>
					<TableBodyCell>A sense for the out-of-place in this world</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (3)</TableBodyCell>
					<TableBodyCell>3 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Can't Take Hold</TableBodyCell>
					<TableBodyCell>Resist magic and psionic forced movement</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Perseverance</TableBodyCell>
					<TableBodyCell>Boost to endurance skill, and only slowed to 3</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Resist the Unnatural</TableBodyCell>
					<TableBodyCell>Can halve incoming elemental damage</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Determination</TableBodyCell>
					<TableBodyCell>Resist frightened, slowed, and weakened</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Staying Power</TableBodyCell>
					<TableBodyCell>Extra recoveries</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Memonek -->
	<Card id="memonek" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Memonek</Heading>
			<P>
				Blue and purple denizens of the Plane of Uttermost Law, seemingly made of aerogel and
				porcelain. Their presence on such a base manifold as Orden causes them to suffer from
				emotions.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Fall Lightly</TableBodyCell>
					<TableBodyCell>Reduce fall distance</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Lightweight</TableBodyCell>
					<TableBodyCell>Easily force-moved</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (4)</TableBodyCell>
					<TableBodyCell>4 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>I Am Law</TableBodyCell>
					<TableBodyCell>You block enemy movement</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Systematic Mind</TableBodyCell>
					<TableBodyCell>Bonus to languages and technical documents</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Unphased</TableBodyCell>
					<TableBodyCell>Cannot be surprised</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Useful Emotion</TableBodyCell>
					<TableBodyCell>Extra surge at combat start</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Keeper of Order</TableBodyCell>
					<TableBodyCell>Remove edge or bane once per round</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Lightning Nimbleness</TableBodyCell>
					<TableBodyCell>Extra speed</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Nonstop</TableBodyCell>
					<TableBodyCell>Cannot be slowed</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Orc -->
	<Card id="orc" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Orc</Heading>
			<P>
				Resembling green Klingons and with a reputation to match, orcs are by-and-large peace-loving
				artisans who prefer to be left alone in the natural forests of Orden. This has brought them
				into conflict with both elves and humans and their reputation in battle is well-earned: they
				do not seek battle but when pressed, fire burns in their veins.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Relentless</TableBodyCell>
					<TableBodyCell>Kill an enemy to spend a recovery</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (3)</TableBodyCell>
					<TableBodyCell>3 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Bloodfire Rush</TableBodyCell>
					<TableBodyCell>Extra speed when taking damage</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Grounded</TableBodyCell>
					<TableBodyCell>Increased stability</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Passionate Artisan</TableBodyCell>
					<TableBodyCell>Bonuses to projects using crafting skills</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Glowing Recovery</TableBodyCell>
					<TableBodyCell>Catch Breath to spend multiple recoveries</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Nonstop</TableBodyCell>
					<TableBodyCell>Cannot be slowed</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Polder -->
	<Card id="polder" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Polder</Heading>
			<P>
				Short, sassy, and incredibly good at going unnoticed, polder can flatten themselves into a
				shadow, getting into all sorts of places they shouldn't and eavesdropping with impunity.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Shadowmeld</TableBodyCell>
					<TableBodyCell>Become an actual shadow</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Small!</TableBodyCell>
					<TableBodyCell>Decreased Size</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (3)</TableBodyCell>
					<TableBodyCell>3 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Corruption Immunity</TableBodyCell>
					<TableBodyCell>Resist corruption damage</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Graceful Retreat</TableBodyCell>
					<TableBodyCell>Extra movement on Disengage</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Polder Geist</TableBodyCell>
					<TableBodyCell>Extra movement when starting turn hidden</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Fearless</TableBodyCell>
					<TableBodyCell>Cannot be frightened</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Nimblestep</TableBodyCell>
					<TableBodyCell>Ignore difficult terrain and sneak at full speed</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Revenant -->
	<Card id="revenant" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Revenant</Heading>
			<P>
				Undead with an axe to grind, revenants are the dead driven by work unfinished or a death
				unjust. They carry some aspects of their ancestry forward in undeath, and can be notoriously
				difficult to destroy.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Former Life</TableBodyCell>
					<TableBodyCell>Size based on your ancestry in life</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Tough But Withered</TableBodyCell>
					<TableBodyCell>Elemental resistances; fire weakness 5; can't die</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (2/3)</TableBodyCell>
					<TableBodyCell>2 Pts, or 3 Pts if Size 1S, to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Previous Life (1 Point)</TableBodyCell>
					<TableBodyCell>Trait from your previous ancestry (repeatable)</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Undead Influence</TableBodyCell>
					<TableBodyCell>Boost to interactions with undead</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Bloodless</TableBodyCell>
					<TableBodyCell>Cannot become bleeding</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Previous Life (2 Points)</TableBodyCell>
					<TableBodyCell>Trait from your previous ancestry (repeatable)</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Vengeance Mark</TableBodyCell>
					<TableBodyCell>Explosive tracker sigil</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>

	<!-- Time Raider -->
	<Card id="time-raider" padding="none" size="xl" class="rounded-md">
		<div class="rounded-t-md p-4">
			<Heading tag="h3" class="mb-2">Time Raider</Heading>
			<P>
				Four-armed space punks with crystals for eyes. Intractable, ungovernable, they loathe
				authority, hate tyranny, and are totally, <em>utterly</em> without fear.
			</P>
		</div>
		<Table striped>
			<TableHead>
				<TableHeadCell class="trait-type">Type</TableHeadCell>
				<TableHeadCell class="trait-name">Feature</TableHeadCell>
				<TableHeadCell class="trait-effect">Effect</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Four Arms</TableBodyCell>
					<TableBodyCell>Double grab, double knockback.</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>Signature</TableBodyCell>
					<TableBodyCell>Purchased Traits (2)</TableBodyCell>
					<TableBodyCell>2 Pts to pick from purchased features</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Beyondsight</TableBodyCell>
					<TableBodyCell>Ground-penetrating radar vision</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Foresight</TableBodyCell>
					<TableBodyCell>Ignore concealment, impose bane on attacks</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>1 Pt</TableBodyCell>
					<TableBodyCell>Psychic Scar</TableBodyCell>
					<TableBodyCell>Resist psychic damage</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow>
					<TableBodyCell>2 Pts</TableBodyCell>
					<TableBodyCell>Psionic Gift</TableBodyCell>
					<TableBodyCell>Psionic attack or buff</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</Card>
</div>
