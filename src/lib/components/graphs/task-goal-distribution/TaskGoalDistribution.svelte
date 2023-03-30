<script lang="ts">
	import type { GoalType } from '$goalspire/types/GoalType';
	import { onMount } from 'svelte';
	import getGoals from '$goalspire/goal/list';
	import Graph from '$components/graphs/Graph.svelte';

	let goals: GoalType[] = [];
	$: goalsMap = new Map();

	let dataLoaded = false;

	let translate = (type: number) => {
		switch (type) {
			case 0:
				return 'Goal';
			case 1:
				return 'Task';
			default:
				return 'Unknown';
		}
	};

	onMount(async () => {
		goals = await getGoals();
		goals.forEach((goal) => {
			// goal.type is a string, so we can use it as a key
			let key = translate(goal.type);
			console.log(goal.type);
			if (goalsMap.has(key)) {
				goalsMap.set(key, goalsMap.get(key) + 1);
			} else {
				goalsMap.set(key, 1);
			}
		});
		console.log(goalsMap);
		dataLoaded = true;
	});
</script>

<div class="card">
	<h3>Goals vs Tasks</h3>
	{#if dataLoaded}
		<Graph data={goalsMap} chartType="pie" label="Goals created" />
	{/if}
</div>

<style lang="scss">
	.card {
		min-width: 500px;
		width: auto;
		min-height: 350px;
		height: auto;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin-top: 20px;

		h3 {
			font-family: 'Inter', sans-serif;
			text-align: center;
			margin-top: 10px;

			font-size: 1.6rem;
			font-weight: 700;
		}
		// card like look with drop shadow and white color and rounded corners
		background-color: white;
		border-radius: 10px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 500px) {
		.card {
			min-width: 300px;
		}
	}
</style>
