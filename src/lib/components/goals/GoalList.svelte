<script lang="ts">
	import Goal from './Goal.svelte';
	import { useGoalspire } from '$goalspire/useGoalspire';
	
	const { getGoals } = useGoalspire;

	export let filterTags: string[] = [];
	export let searchQuery: string = '';

	export const onTagsChanged = (tags: string[], query: string) => {
		filterTags = tags;
		searchQuery = query;
	};
</script>

<div class="content">
	{#await getGoals()}
		<p>Loading...</p>
	{:then goals} 
		{#each goals as goal}
			{#if (filterTags.length === 0 || filterTags.some( (tag) => goal?.tags?.includes(tag) )) && (searchQuery == null || searchQuery.trim() === '' || goal.title
				.toLowerCase()
				.includes(searchQuery.toLowerCase()))}
				<Goal goalContext={goal} />
			{/if}
		{/each}
	{/await}
</div>

<style lang="scss">
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;

		gap: 1rem;

		//TODO: This could be breaking stuff
		overflow-y: auto;

		padding-bottom: 300px;
	}
</style>
