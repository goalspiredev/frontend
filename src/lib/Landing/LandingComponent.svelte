<script lang="ts">
	import WritingEffect from '$components/common/WritingEffect.svelte';
	import CarouselFullScreen from '$components/carousel/CarouselFullScreen.svelte';

	export let text: string[];
</script>

<template>
	<CarouselFullScreen>
		<div
			class="flex flex-col gap-12 items-center mb-32 font-quicksand font-bold text-center text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
		>
			<div>
				<h1 class="font-medium">It is about</h1>
				<WritingEffect {text} /><span class="font-light">|</span>
			</div>
			<button
				class="px-8 lg:px-16 py-1 lg:py-2 border-black border-2 bg-white bg-opacity-20 rounded-xl uppercase text-sm transition-all hover:bg-opacity-70 sm:text-base md:text-lg lg:text-xl"
			>
				begin now
			</button>
		</div>
	</CarouselFullScreen>
</template>
