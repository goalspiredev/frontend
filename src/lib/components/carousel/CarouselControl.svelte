<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let activated = false;
	export let colors: {
		activated: string;
		deactivated: string;
	} = {
		activated: '#ffffff',
		deactivated: '#b6b6b6'
	};

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={handleClick}>
	<div
		style="--activated: {colors.activated}; --deactivated: {colors.deactivated}"
		class="control {activated ? 'yes' : 'no'}"
	/>
</div>

<style lang="scss" scoped>
	div {
		cursor: pointer;

		.control {
			width: 2rem;
			height: 0.8rem;

			transition: all 0.15s ease-in-out;

			border-radius: 10px;
		}

		.yes {
			width: 3.5rem;
			background-color: var(--activated);
		}

		.no {
			width: 1.8rem;
			background-color: var(--deactivated);
		}
	}
</style>
