<script lang="ts">
	import Eye from '$icons/Eye.svelte';
	import EyeDashed from '$icons/EyeDashed.svelte';
	import { TranslateColor } from '$utils/color.util';
	import { onMount } from 'svelte';

	export let value = '';
	export let name = '';

	let passwordShown = false;
	let passwordInput: HTMLInputElement;

	onMount(() => {
		passwordInput.type = 'password';
	});

	function toggleVisibility(type: 'click' | 'key', e: KeyboardEvent = new KeyboardEvent('')) {
		if (type === 'key' && e.key !== 'S') return;
		passwordShown = !passwordShown;
		passwordInput.type = passwordShown ? 'text' : 'password';
	}

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

<div class="passwordInput">
	<label bind:this={labelText}>
		<slot />
	</label>
	<input bind:this={passwordInput} {name} bind:value on:focusin={focus} on:focusout={leave} />
	<div
		class="eye"
		on:click={() => toggleVisibility('click')}
		on:keypress={(e) => toggleVisibility('key', e)}
	>
		{#if !passwordShown}
			<Eye size={32} color={TranslateColor('gray')} />
		{:else}
			<EyeDashed size={32} color={TranslateColor('gray')} />
		{/if}
	</div>
</div>

<style lang="scss" scoped>
	.passwordInput {
		position: relative;
		width: 100%;
		max-width: 480px;
		min-width: 300px;
		min-height: 48px;
		max-height: 48px;

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

	.eye {
		cursor: pointer;

		position: absolute;
		right: 0;
		height: 100%;
		width: 4rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
