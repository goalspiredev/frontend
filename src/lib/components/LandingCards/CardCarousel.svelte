<script lang="ts">
	import Card from './Card.svelte';

	export let content: {
		image: string;
		imageSide: 'left' | 'right';
		num: number;
		title: string;
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
		margin: 4rem 0;

		display: flex;
		flex-direction: column;
		gap: 2rem;

        @include br-md {
            gap: 0;
        }
	}
</style>
