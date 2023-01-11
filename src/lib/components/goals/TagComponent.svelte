<script lang="ts">
	export let name: string;
</script>

<div class="tag">
	<p>{name}</p>
</div>

<style lang="scss" scoped>
	.tag {
		background-color: #eb4f4f;
		border-radius: 5px;
		padding: 1px 10px;

		p {
			font-family: Quicksand, sans-serif;
			font-size: 0.9rem;
			color: white;
		}
	}
</style>
