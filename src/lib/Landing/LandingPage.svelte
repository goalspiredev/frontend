<script lang="ts">
	import LandingComponent from './LandingComponent.svelte';
	import CardCarousel from '$components/cards/CardCarousel.svelte';
	import Footer from '$components/common/footer/Footer.svelte';

	import LandingContent from '$assets/jsons/landing.json';
	import CardsContent from '$assets/jsons/cards.json';
	import SocialContent from '$assets/jsons/socials.json';

	const sections = [
		{
			component: LandingComponent,
			props: {
				text: LandingContent
			}
		},
		{
			component: CardCarousel,
			props: {
				content: CardsContent
			}
		},
		{
			component: Footer,
			props: {
				socials: SocialContent
			}
		}
	];
</script>

<template>
	<div class="flex flex-col overflow-x-hidden">
		{#each sections as section}
			<svelte:component this={section.component} {...section.props} />
		{/each}
	</div>
</template>
