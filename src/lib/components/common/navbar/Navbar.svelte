<script lang="ts">
	import NavbarDesktop from './NavbarDesktop.svelte';
	import NavbarMobile from './NavbarMobile.svelte';
</script>

<template>
	<nav class="mobile">
		<NavbarMobile />
	</nav>
	<nav class="desktop">
		<NavbarDesktop />
	</nav>
</template>

<style lang="scss" scoped>
	.mobile {
		@include br-lg {
			display: none;
		}
	}

	.desktop {
		display: none;

		@include br-lg {
			display: block;
		}
	}
</style>
