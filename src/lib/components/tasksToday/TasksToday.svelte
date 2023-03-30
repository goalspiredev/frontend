<script lang="ts">
	import GoalList from '$components/goals/GoalList.svelte';
</script>

<div class="card">
	<h3>Goals and tasks for today</h3>
	<GoalList overrideAlign={true} />
</div>

<style lang="scss">
	.card {
		min-width: 150px;
		width: auto;
		min-height: 150px;
		height: auto;

		padding: 20px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin-top: 20px;

		h3 {
			font-family: 'Inter', sans-serif;
			text-align: center;
			margin-top: 10px;

			font-size: 1.8rem;
			font-weight: 700;

			margin-bottom: 30px;

			padding: 0 20px;

			span {
				font-weight: 900;
				color: #ff6b6b;
			}
		}

		// card like look with drop shadow and white color and rounded corners
		background-color: white;
		border-radius: 10px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	}
</style>
