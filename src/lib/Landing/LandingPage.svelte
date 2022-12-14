<script lang="ts">
	import LandingComponent from './LandingComponent.svelte';
	import CardCarousel from '$components/LandingCards/CardCarousel.svelte';
	import GetStartedComponent from '$components/GetStarted/GetStartedComponent.svelte';
	import Footer from '$components/common/footer/Footer.svelte';

	import LandingContent from '$assets/json/landing.json';
	import CardsContent from '$assets/json/cards.json';
	import GetStartedContent from '$assets/json/started.json';
	import SocialContent from '$assets/json/socials.json';

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
			component: GetStartedComponent,
			props: {
				content: GetStartedContent
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
	<div>
		{#each sections as section}
			<svelte:component this={section.component} {...section.props} />
		{/each}
	</div>
</template>

<style lang="scss" scoped>
	div {
		display: flex;
		flex-direction: column;

		overflow-x: hidden;
	}
</style>
