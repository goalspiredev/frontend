<script lang="ts">
	import '$style/global.scss';
	import Navbar from '$components/common/navbar/Navbar.svelte';
</script>

<template>
	<Navbar />
	<main style="overflow-x: hidden;">
		<slot />
	</main>
</template>
