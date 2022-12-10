<script lang="ts">
	export let value = false;

	function changeValue(type: 'click' | 'key', e: KeyboardEvent = new KeyboardEvent('')) {
		if (type === 'key' && e.key !== 'C') return;
		value = !value;
	}
</script>

<div class="checkbox">
	<div
		class={value ? 'fill' : ''}
		on:click={() => changeValue('click')}
		on:keypress={(e) => changeValue('key', e)}
	/>
	<label for="">
		<slot />
	</label>
</div>

<style lang="scss" scoped>
	.checkbox {
		position: relative;

		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		justify-content: flex-start;

		z-index: 1;

		div {
			cursor: pointer;

			width: 1.25rem;
			height: 1.25rem;

			border: 1px solid var(--gray);
			border-radius: 4px;
		}

		.fill::after {
			content: '';

			position: absolute;
			top: 2px;
			left: 2px;
			width: 16px;
			height: 16px;

			background-color: var(--red);
			border-radius: 4px;
		}
	}
</style>
