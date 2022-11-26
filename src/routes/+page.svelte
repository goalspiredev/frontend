<script lang="ts">
	import CarouselNextGen from '$components/common/carousel/core/CarouselNextGen.svelte';
	import WritingEffect from '$components/common/WritingEffect.svelte';
	import CardGroup from "$components/cards/CardGroup.svelte";
	import ourVisionContent from "$assets/ourVisionContent.json";
	import ourSolutionContent from "$assets/ourSolutionContent.json";

	const text: string[] = ['discipline.', 'hard work.', 'dedication.', 'perseverance.'];
</script>

<div class="landing-wrap">
	<CarouselNextGen>
		<div>
			<h1>
				It is about
			</h1>
			<WritingEffect {text} />|
		</div>
	</CarouselNextGen>
	<CardGroup cardsContent={ourVisionContent} />
	<CardGroup cardsContent={ourSolutionContent} />
</div>

<style lang="scss" scoped>
	.landing-wrap {
		width: 100%;
		height: 100vh;

		div	{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 0 1rem 15rem 1rem;

			overflow-x: hidden;

			font-family: 'Comfortaa', sans-serif;
			font-size: 3rem;
			font-weight: 800;
			line-height: normal;

			@include br-md {
				font-size: 3.5rem;
			}

			@include br-lg {
				font-size: 5rem;
			}

			h1 {
				font-size: 3rem;
				font-weight: 400;

				@include br-md {
					font-size: 4rem;
				}

				@include br-lg {
					font-size: 6rem;
				}
			}
		}
	}
</style>
