<script lang="ts">
	import NavbarMobileMenu from './NavbarMobileMenu.svelte';

	let showMenu = false;

	function toggleMenu(type: 'click' | 'key', e: KeyboardEvent = new KeyboardEvent('')) {
		if (type === 'key' && e.key !== 'M') return;
		showMenu = !showMenu;
	}
</script>

<NavbarMobileMenu bind:show={showMenu} />
<div class="navbar-container {showMenu ? 'fix' : ''}">
	<a href="/" on:click={() => (showMenu = false)}>
		<h1>Goalspire</h1>
	</a>
	<div
		class="burger-container"
		on:click={() => toggleMenu('click')}
		on:keypress={(e) => toggleMenu('key', e)}
	>
		<div class="burger {showMenu ? 'open' : ''}" />
	</div>
</div>

<style lang="scss" scoped>
	.navbar-container {
		position: absolute;
		width: 100%;
		padding: 1rem;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		z-index: 10;

		&.fix {
			position: fixed;
			top: 0;
			left: 0;
			background-color: var(--white);
		}

		h1 {
			font-family: 'Comfortaa', cursive;
			font-size: 2rem;
			font-weight: 600;
			-webkit-text-stroke: 1px var(--black);
		}
	}

	.burger-container {
		cursor: pointer;

		width: 2rem;
		height: 2rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.burger {
		width: 1.75rem;
		height: 0.25rem;

		transition: all 0.2s ease-in-out;

		border-radius: 0.25rem;

		background-color: var(--black);

		&::before,
		&::after {
			content: '';

			position: absolute;
			width: 1.75rem;
			height: 0.25rem;

			transition: all 0.2s ease-in-out;

			border-radius: 0.25rem;

			background-color: var(--black);
		}

		&::before {
			transform: translateY(-0.5rem);
		}

		&::after {
			transform: translateY(0.5rem);
		}

		&.open {
			transform: translateX(-0.125rem);
			background-color: transparent;
		}

		&.open::before {
			transform: rotate(45deg);
			width: 2rem;
		}

		&.open::after {
			transform: rotate(-45deg);
			width: 2rem;
		}
	}
</style>
