<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value = '';
	export let name = '';
	export let required = true;

	export let showLabel = true;

	let labelText: HTMLElement;
	let dispatch = createEventDispatcher();

	function focus() {
		if (showLabel) {
			labelText.style.top = '0px';
			labelText.style.color = '#EB4F4F';
			labelText.style.fontSize = '0.6rem';
		}
	}

	function leave() {
		if (value.length == 0) {
			labelText.style.top = '20%';
			labelText.style.color = '#000000';
			labelText.style.fontSize = '0.8rem';
		}
	}
</script>

<div class="textInput">
	<label bind:this={labelText} for={name}>
		<slot />
	</label>
	<input
		type="text"
		{name}
		{required}
		id={name}
		bind:value
		on:focusin={focus}
		on:focusout={leave}
		on:input={() => dispatch('onInputChanged', '')}
	/>
</div>

<style lang="scss" scoped>
	.textInput {
		position: relative;
		width: 100%;
		max-width: 480px;
		//min-width: 300px;
		height: 48px;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;

		border: 1px solid #ccc;
		border-radius: 5px;

		label {
			position: absolute;
			top: 20%;
			padding-left: 10px;

			transition: all 0.2s ease-in-out;

			font-size: 0.8rem;
			font-family: Comfortaa, sans-serif;
		}

		input {
			width: 100%;
			padding: 20px 10px 0;
			height: 100%;
			font-family: Comfortaa, sans-serif;

			&:focus {
				outline: 2px solid #eb4f4f;
			}
		}
	}
</style>
