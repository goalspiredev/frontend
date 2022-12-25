<script lang="ts">
	import Arrow from '$icons/Arrow.svelte';

	export let section: {
		num: number;
		title: string;
		description: string;
		last?: boolean;
	};
</script>

<template>
	<div class="wrap">
		<div class="arrow">
			<div>
				<h1>{section.num}</h1>
			</div>
			{#if !section.last}
				<Arrow />
			{/if}
		</div>

		<div class="text">
			<h2>{section.title}</h2>
			<p>{section.description}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.wrap {
		max-width: 640px;
		display: flex;
		gap: 1rem;

		font-family: 'Quicksand', sans-serif;

		.arrow {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			div {
				width: 3rem;
				height: 3rem;

				display: flex;
				justify-content: center;
				align-items: center;

				background-color: var(--red);

				border-radius: 0.75rem;

				@include br-md {
					width: 4rem;
					height: 4rem;
				}

				h1 {
					color: var(--white);
					font-size: 2rem;
					font-weight: 500;

					@include br-md {
						font-size: 3rem;
					}
				}
			}
		}

		.text {
			margin-bottom: 5rem;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			text-align: left;

			h2 {
				font-size: 1.5rem;
				font-weight: 700;

				@include br-md {
					font-size: 1.75rem;
				}

				@include br-lg {
					font-size: 2rem;
				}
			}

			p {
				font-size: 1rem;
				font-weight: 500;

				@include br-md {
					font-size: 1.25rem;
				}

				@include br-lg {
					font-size: 1.5rem;
				}
			}
		}
	}
</style>
