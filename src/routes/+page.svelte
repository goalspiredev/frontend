<script>
	  import Flag from "$icons/Flag.svelte";
    import CardGroup from "$lib/components/cards/CardGroup.svelte";
</script>

<div>
	<h1>Site is being built</h1>
	<img src="https://c.tenor.com/58DNSt-Lvw0AAAAd/corgi-computer.gif" alt="corgi pc gif" />
	<h1>Check back soon!</h1>
	<Flag color="red" size={24} />
</div>

<style scoped lang="scss">
	div {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		font-family: 'Comfortaa', sans-serif;

		h1 {
			font-size: 1.75rem;
			font-weight: 800;

			@media screen and (min-width: 768px) {
				font-size: 2.5rem;
			}
		}

		img {
			width: 16rem;

			@media screen and (min-width: 768px) {
				width: 24rem;
			}
		}
	}
</style>
