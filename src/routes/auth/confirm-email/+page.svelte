<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<template>
	<div class="wrap">
		{#if data.success}
			<div>
				<h1 class="success">Success!</h1>
				<p>Your email has been confirmed.</p>
				<a href="/login">Login here</a>
			</div>
		{:else}
			<div>
				<h1 class="wrong">Oops!</h1>
				<p>Something went wrong.</p>
				<a href="/support">Please visit support</a>
			</div>
		{/if}
	</div>
</template>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		height: 100vh;
		padding: 0 1rem;

		display: flex;
		justify-content: center;
		align-items: center;

		font-family: 'Montserrat', sans-serif;
		font-weight: 700;

		div {
			display: flex;
			flex-direction: column;
			align-items: center;

			h1 {
				font-size: 3rem;
				margin-bottom: 1rem;
			}

			p {
				font-size: 1.5rem;
			}

			a {
				font-size: 1.5rem;
				color: #0984e3;
				text-decoration: none;
				margin-top: 1rem;
				text-decoration: underline;
			}

			.success {
				color: #00b894;
			}

			.wrong {
				color: #d63031;
			}
		}
	}
</style>
