<script lang="ts">
    import "$assets/css/reset.css";
    import "$assets/css/_breakpoints.scss";
    import Navbar from "$components/common/navbar/Navbar.svelte";
</script>

<template>
    <Navbar />
    <slot />
</template>
