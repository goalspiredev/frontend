<script lang="ts">
	import NavbarDesktop from './NavbarDesktop.svelte';
	import NavbarMobile from './NavbarMobile.svelte';
</script>

<template>
	<nav class="lg:hidden">
		<NavbarMobile />
	</nav>
	<nav class="hidden lg:block">
		<NavbarDesktop />
	</nav>
</template>
