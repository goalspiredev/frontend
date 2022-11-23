<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let activated: boolean = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={handleClick}>
	<div class="control {activated ? 'yes' : 'no'}" />
</div>

<style lang="scss">
	div {
		.control {
			width: 2rem;
			height: 0.8rem;
			border-radius: 10px;
			background-color: #cccccc;
			transition: all 0.15s ease-in-out;
		}

		.yes {
			background-color: #ffffff;
			width: 3.5rem;
		}

		.no {
			background-color: #cccccc;
			width: 1.8rem;
		}
	}
</style>
