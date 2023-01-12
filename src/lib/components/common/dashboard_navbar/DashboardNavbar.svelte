<script lang="ts">
	import { onMount } from 'svelte';

	let currentPath = '';

	let menu: HTMLElement;

	onMount(() => {
		currentPath = window.location.pathname;
	});
</script>

<div class="space">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="icon" on:click={() => (menu.style.transform = 'translateX(0)')}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
			><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
				d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
			/></svg
		>
	</div>
</div>
<div class="wrap" bind:this={menu}>
	<div class="arrow">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="icon" on:click={() => (menu.style.transform = 'translateX(-100%)')}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
				><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
				/></svg
			>
		</div>
	</div>
	<div class="wrap-wrap">
		<h1>Goalspire</h1>
		<div>
			<a href="/dashboard">
				<h2 class="link {!currentPath.split('/')[2] ? 'bold' : ''}">HOME</h2>
			</a>
			<a href="/dashboard/goals">
				<h2 class="link {currentPath.split('/')[2] === 'goals' ? 'bold' : ''}">GOALS</h2>
			</a>
			<a href="/dashboard/account">
				<h2 class="link {currentPath.split('/')[2] === 'account' ? 'bold' : ''}">ACCOUNT</h2>
			</a>
		</div>
		<div class="line" />
		<div>
			<a href="/dashboard/settings">
				<h2 class="link {currentPath.split('/')[2] === 'settings' ? 'bold' : ''}">SETTINGS</h2>
			</a>
			<a href="/dashboard/support">
				<h2 class="link {currentPath.split('/')[2] === 'support' ? 'bold' : ''}">SUPPORT</h2>
			</a>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.space {
		width: 5rem;
		height: 100vh;

		display: flex;
		justify-content: center;

		background-color: white;
	}

	.icon {
		margin-top: 1rem;
		width: 3rem;
		height: 3rem;
		cursor: pointer;
	}

	.arrow {
		width: 100%;
		padding-left: 1rem;
	}

	.wrap {
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(-100%);
		width: 20rem;
		height: 100vh;

		z-index: 10;

		display: flex;
		flex-direction: column;
		align-items: center;

		font-family: 'Quicksand', sans-serif;
		font-size: 24px;

		background-color: white;

		transition: all 0.2s ease-in-out;

		&:hover {
			transform: translateX(0);
		}

		.wrap-wrap {
			width: 60%;
			height: 100%;
			margin-top: 2.5rem;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			h1 {
				margin-bottom: 2.5rem;
				font-size: 48px;
			}

			div {
				width: 100%;

				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				a {
					transition: all 0.2s ease-in-out;
					&:hover {
						color: var(--red);
					}
				}
			}
		}
	}

	.bold {
		font-weight: 600;
	}

	.line {
		background-color: #b8b8b8;
		width: 100%;
		height: 2px;
	}
</style>
