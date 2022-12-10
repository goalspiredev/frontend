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
		cursor: pointer;
		width: 100%;
		max-width: 380px;
		min-width: 220px;
		height: 3rem;

		display: flex;
		justify-content: center;
		align-items: center;

		transition: background-color 0.2s;

		border: none;
		border-radius: 4px;

		background-color: var(--color);
		color: var(--white);

		font-size: 1.5rem;
		font-weight: 600;

		&:hover {
			border: 2px solid var(--color);
			background-color: transparent;
			color: var(--color);
		}
	}
</style>
