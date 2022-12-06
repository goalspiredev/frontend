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
			border-radius: 10px;
			transition: all 0.15s ease-in-out;
		}

		.yes {
			background-color: var(--activated);
			width: 3.5rem;
		}

		.no {
			background-color: var(--deactivated);
			width: 1.8rem;
		}
	}
</style>
