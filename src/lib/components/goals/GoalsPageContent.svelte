<script lang="ts">
	import TextInput from '../forms/TextInput.svelte';
	import GoalList from '$components/goals/GoalList.svelte';

	let query: string = '';
	let sorting: string = 'NAME';
	let activeFilters: string[] = [];

	let availableFilters: string[] = ['important', 'school', 'postponed', 'work'];

	function changeFilterActivity(shouldBeActive: boolean, filter: string) {
		if (shouldBeActive) {
			activeFilters = [...activeFilters, filter];
		} else {
			activeFilters = activeFilters.filter((f) => f !== filter);
		}

		onFiltersChanged(activeFilters, query);
	}

	function inputChanged() {
		onFiltersChanged(activeFilters, query);
	}

	function createGoal() {
		console.log('create');
	}

	let onFiltersChanged;
</script>

<div class="content">
	<TextInput bind:value={query} on:onInputChanged={inputChanged}>Search</TextInput>
	<div class="filters">
		{#each availableFilters as filter}
			{#if activeFilters.includes(filter)}
				<button on:click={() => changeFilterActivity(false, filter)} class="selected"
					>{filter}</button
				>
			{:else}
				<button on:click={() => changeFilterActivity(true, filter)} class="disabled"
					>{filter}</button
				>
			{/if}
		{/each}
	</div>
	<p>Sort by: {sorting}</p>
	<GoalList filterTags={activeFilters} bind:onTagsChanged={onFiltersChanged} />
	<button class="createGoal" on:click={createGoal}>Create new Goal / Task</button>
</div>

<style lang="scss">
	h1,
	p {
		font-family: Inter, sans-serif;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		position: relative;

		gap: 20px;

		width: 100%;
		height: 100%;

		padding-top: 50px;
		padding-left: 50px;

		h1 {
			color: black;
		}

		.filters {
			display: flex;
			gap: 10px;
			flex-wrap: wrap;

			button {
				color: white;
				font-size: 1rem;

				border-radius: 5px;
				padding: 1px 10px;

				font-family: Inter, sans-serif;
				font-weight: bold;
			}

			button.selected {
				background-color: var(--red);
			}

			button.disabled {
				background-color: #9f9f9f;
			}
		}

		p {
			font-size: 1.3rem;
			text-transform: uppercase;
			font-weight: bold;
		}

		button.createGoal {
			position: absolute;
			bottom: 20px;
			right: 50px;

			padding: 10px 20px;
			border-radius: 5px;
			border: none;
			background-color: var(--red);
			font-family: Comfortaa, sans-serif;
			font-size: 1.2rem;
			color: white;

			cursor: pointer;

			transition: all 0.2s;
		}

		button.createGoal:hover {
			transform: scale(1.05);
		}
	}
</style>
