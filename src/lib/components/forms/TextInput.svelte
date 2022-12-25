<script lang="ts">
	export let value = '';
	export let name = '';

	let labelText: HTMLElement;

	function focus() {
		labelText.style.top = '0px';
		labelText.style.color = '#EB4F4F';
		labelText.style.fontSize = '0.9rem';
	}

	function leave() {
		if (value.length == 0) {
			labelText.style.top = '25%';
			labelText.style.color = '#000000';
			labelText.style.fontSize = '1rem';
		}
	}
</script>

<div class="textInput">
	<label bind:this={labelText}>
		<slot />
	</label>
	<input type="text" {name} bind:value on:focusin={focus} on:focusout={leave} />
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
			top: 25%;
			padding-left: 10px;

			transition: all 0.2s ease-in-out;

			font-size: 1rem;
		}

		input {
			width: 100%;
			padding: 20px 10px 0;
			height: 100%;
		}
	}
</style>
