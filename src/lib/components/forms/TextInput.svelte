<script lang="ts">
	export let value: string = '';
</script>

<div class="textInput">
	<label for="">
		<slot />
	</label>
	<input type="text" bind:value />
</div>

<style lang="scss">
	.textInput {
		max-width: 480px;
		width: 100%;
		min-width: 300px;
		height: 48px;

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
</style>
