<script lang="ts">
	import { onMount } from 'svelte';

	import AOS from 'aos';

	onMount(() => {
		AOS.init();
	});

	export let content: {
		image: string;
		imageSide: 'left' | 'right';
		imageBlur: string;
		text: string;
	};
</script>

<template>
	<div
		class="w-screen flex flex-row gap-6 justify-center px-8 py-2 md:px-16 md:py-4 lg:px-32 lg:py-8"
		data-aos="fade-right"
	>
		{#if content.imageSide == 'left'}
			<img
				src={content.image}
				alt=""
				style="--color: {content.imageBlur}"
				class="hidden w-1/4 object-cover rounded-[2rem] boxshadow md:block"
			/>
		{/if}

		<p class="w-5/6 mt-4 font-quicksand font-medium text-lg md:text-xl md:w-1/3 lg:text-2xl">
			{@html content.text}
		</p>

		{#if content.imageSide == 'right'}
			<img
				src={content.image}
				alt=""
				style="--color: {content.imageBlur}"
				class="hidden w-1/4 object-cover rounded-[2rem] boxshadow md:block"
			/>
		{/if}
	</div>
</template>

<style lang="scss" scoped>
	.boxshadow {
		box-shadow: 0px 10px 24px 0px var(--color);
	}
</style>
