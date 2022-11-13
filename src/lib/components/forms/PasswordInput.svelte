<script lang="ts">
	import Eye from '$icons/Eye.svelte';
	import EyeDashed from '$icons/EyeDashed.svelte';
	import { onMount } from 'svelte';

	export let value: string;

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
</script>

<div class="passwordInput">
	<label for="">
		<slot />
	</label>
	<input bind:this={passwordInput} bind:value />
	<div
		class="eye"
		on:click={() => toggleVisibility('click')}
		on:keypress={(e) => toggleVisibility('key', e)}
	>
		{#if !passwordShown}
			<Eye size={32} color="gray" />
		{:else}
			<EyeDashed size={32} color="gray" />
		{/if}
	</div>
</div>

<style lang="scss">
	.passwordInput {
		max-width: 480px;
		width: 100%;
		min-width: 300px;
		max-height: 48px;

		border: 1px solid #ccc;
		border-radius: 5px;

		display: flex;
		align-items: center;
		justify-content: center;

		input {
			width: 100%;
			padding: 0 10px;
		}
	}

	.eye {
		height: 4rem;
		width: 4rem;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
