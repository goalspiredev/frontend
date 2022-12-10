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
	<div class="card" data-aos="fade-right">
		{#if content.imageSide == 'left'}
			<img src={content.image} alt={content.image} style="--color: {content.imageBlur}" />
		{/if}

		<p>
			{@html content.text}
		</p>

		{#if content.imageSide == 'right'}
			<img src={content.image} alt={content.image} style="--color: {content.imageBlur}" />
		{/if}
	</div>
</template>

<style lang="scss" scoped>
	.card {
		width: 100vw;
		padding: 0.5rem 2rem;

		display: flex;
		flex-direction: row;
		gap: 1.5rem;
		justify-content: center;

		@include br-md {
			padding: 1rem 4rem;
		}

		@include br-lg {
			padding: 2rem 8rem;
		}

		img {
			width: 25%;

			display: none;

			object-fit: cover;

			border-radius: 2rem;
			box-shadow: 0px 10px 24px 0px var(--color);

			@include br-md {
				display: block;
			}
		}

		p {
			width: 85%;
			margin-top: 1rem;

			font-family: 'Quicksand', sans-serif;
			font-weight: 500;
			font-size: large;

			@include br-md {
				width: 33%;
				font-size: larger;
			}

			@include br-lg {
				font-size: x-large;
			}
		}
	}
</style>
