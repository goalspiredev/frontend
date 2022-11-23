<script lang="ts">
	import CarouselControl from '../controls/CarouselControl.svelte';

	export let images: string[] = ['images/1.svg', 'images/2.svg', 'images/3.svg'];

	let currentImage: number = 0;
</script>

<div class="carousel">
	<img src={images[currentImage]} alt="carousel_image" />
	<div class="content">
		<slot />
	</div>
	<div class="controls">
		{#each images as image, i}
			<CarouselControl on:click={() => (currentImage = i)} activated={i === currentImage} />
		{/each}
	</div>
</div>

<style lang="scss" scoped>
	.carousel {
		width: 100%;
		height: 100vh;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
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
