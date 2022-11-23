<script lang="ts">
	import { onMount } from 'svelte';

	import CarouselControl from '../controls/CarouselControl.svelte';

	export let images: string[] = ['images/1.svg', 'images/2.svg', 'images/3.svg'];

	let currentImage: number = 0;

	let image: HTMLImageElement;

	onMount(() => {
		setInterval(() => {
			handleClick((currentImage + 1) % images.length);
		}, 5000);
	});

	function handleClick(i: number) {
		image.style.opacity = '0';
		setTimeout(() => {
			image.style.opacity = '0.75';
			currentImage = i;
		}, 400);
	}
</script>

<div class="carousel">
	<img bind:this={image} src={images[currentImage]} alt="carousel_image" />
	<div class="content">
		<slot />
	</div>
	<div class="controls">
		{#each images as image, i}
			<CarouselControl on:click={() => handleClick(i)} activated={i === currentImage} />
		{/each}
	</div>
</div>

<style lang="scss" scoped>
	.carousel {
		width: 100%;
		height: 100vh;
		overflow: hidden;

		img {
			width: 100%;
			height: 100vh;
			object-fit: cover;
			transition: all 0.4s ease-in-out;
		}
	}

	.content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.controls {
		position: absolute;
		bottom: 2rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
	}
</style>
