<script lang="ts">
	export let value = true;
	export let name = '';
</script>

<label>
	<input type="checkbox" {name} class={value ? 'bg' : ''} on:click={() => (value = !value)} />
	<slot />
</label>

<style lang="scss" scoped>
	.bg {
		background-color: var(--red);
	}

	label {
		display: flex;
		cursor: pointer;
		align-items: center;
		gap: 0.25rem;
		margin-left: 0.25rem;

		&:focus {
			outline: 2px solid var(--red);
		}

		input[type='checkbox'] {
			cursor: pointer;

			&:focus {
				outline: 2px solid var(--red);
				border-radius: 16px;
			}

			width: 1.1rem;
			height: 1.1rem;

			border: 1px solid var(--gray);
			border-radius: 4px;
		}
	}
</style>
