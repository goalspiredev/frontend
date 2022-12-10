<script lang="ts">
	export let selected: boolean;
	export let content: string;

	function handleClick() {
		selected = !selected;
		console.log(selected);
	}
</script>

<div class="selectInput">
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<a on:click={handleClick}>
		{#if selected}
			<div class="selectBoxFilled" />
		{:else}
			<div class="selectBox" />
		{/if}
	</a>
	<p>{content}</p>
</div>

<style lang="scss" scoped>
	.selectInput {
		width: 300px;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		.selectBox {
			width: 20px;
			height: 20px;

			border: 1px solid black;
			border-radius: 4px;
		}

		.selectBoxFilled {
			width: 20px;
			height: 20px;

			border: 1px solid black;
			border-radius: 4px;

			background-color: #eb4f4f;
		}

		p {
			margin-left: 10px;
			text-align: center;
			vertical-align: middle;
		}
	}
</style>
