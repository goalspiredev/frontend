<script lang="ts">
	import { onMount } from 'svelte';

	import CarouselControl from './CarouselControl.svelte';

	export let images: string[] = [
		'images/carousel/1.png',
		'images/carousel/4.png',
		'images/carousel/3.png'
	];

	let currentImage = 0;
	let userClicked = false;

	let carouselDiv: HTMLElement;

	onMount(() => {
		setInterval(() => {
			!userClicked ? handleClick((currentImage + 1) % images.length) : (userClicked = false);
		}, 5000);
	});

	function handleClick(i: number, user = false) {
		userClicked = user;

		carouselDiv.style.transform = `translateX(-${i * 100}%)`;

		currentImage = i;
	}
</script>

<div class="carousel">
	<div bind:this={carouselDiv} class="imgWrapper">
		{#each images as image}
			<img src={image} alt="carousel_image" style="opacity: 0.98;" />
		{/each}
	</div>
	<div class="content">
		<slot />
	</div>
	<div class="controls">
		{#each images as image, i}
			<CarouselControl on:click={() => handleClick(i, true)} activated={i === currentImage} />
		{/each}
	</div>
</div>

<style lang="scss" scoped>
	.carousel {
		width: 100vw;
		height: 100vh;

		overflow: hidden;

		.imgWrapper {
			display: flex;
			flex-direction: row;
			flex-shrink: 0;

			transition-property: all;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 700ms;
		}

		img {
			width: 100vw;
			height: 100vh;

			object-fit: cover;

			transition: all 0.4s ease-in-out;
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
	}
</style>
