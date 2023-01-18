<script lang="ts">
	export let name: string;
	export let background: string = '#eb4f4f';
</script>

<div class="tag" style="background-color: {background};">
	<p>{name}</p>
</div>

<style lang="scss" scoped>
	.tag {
		border-radius: 5px;
		padding: 1px 10px;

		p {
			font-family: Quicksand, sans-serif;
			font-size: 0.9rem;
			color: white;
			font-weight: bold;
		}
	}
</style>
