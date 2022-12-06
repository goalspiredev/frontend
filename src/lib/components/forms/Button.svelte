<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let color = '#EB4F4F';
</script>

<button style="--color: {color}" on:click|preventDefault={() => dispatch('submit')}>
	<slot />
</button>

<style lang="scss" scoped>
	button {
		max-width: 380px;
		width: 100%;
		min-width: 220px;
		height: 3rem;
		border-radius: 4px;
		background-color: var(--color);
		color: var(--white);
		font-size: 1.5rem;
		font-weight: 600;
		border: none;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

		transition: background-color 0.2s;

		&:hover {
			background-color: transparent;
			border: 2px solid var(--color);
			color: var(--color);
		}
	}
</style>
