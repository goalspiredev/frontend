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
	<div class="flex flex-col my-16">
		{#each content as cont}
			<Card content={cont} />
		{/each}
	</div>
</template>
