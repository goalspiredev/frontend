<script lang="ts">
	export let value = true;
	export let name = '';
</script>

<label>
	<input type="checkbox" {name} class="{value ? 'bg' : ''}" on:click={() => value = !value}/>
	<slot />
</label>

<style lang="scss" scoped>
	.bg {
		background-color: var(--red);
	}

	label {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin-left: 0.25rem;

		input[type='checkbox'] {
			cursor: pointer;

			width: 1.1rem;
			height: 1.1rem;

			border: 1px solid var(--gray);
			border-radius: 4px;
		}
	}
</style>
