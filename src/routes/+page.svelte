<script lang="ts">
	import CarouselNextGen from '$components/common/carousel/core/CarouselNextGen.svelte';
	import WritingEffect from '$components/common/WritingEffect.svelte';

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

			font-family: 'Comfortaa', sans-serif;
			font-size: 5rem;
			font-weight: 800;
			line-height: normal;

			h1 {
				font-size: 6rem;
				font-weight: 400;
			}
		}
	}
</style>
