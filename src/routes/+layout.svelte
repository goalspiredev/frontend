<script lang="ts">
	import '$scss/global.scss';
	import Navbar from '$components/common/navbar/Navbar.svelte';
</script>

<template>
	<Navbar />
	<main>
		<slot />
	</main>
</template>
