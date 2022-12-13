<script lang="ts">
	import Card from './Card.svelte';

	export let content: {
		image: string;
		imageSide: 'left' | 'right';
		imageBlur: string;
		text: string;
	}[];
</script>

<template>
	<div id="cards">
		{#each content as cont}
			<Card content={cont} />
		{/each}
	</div>
</template>

<style lang="scss" scoped>
	div {
		display: flex;
		flex-direction: column;
		margin: 4rem 0;
	}
</style>
