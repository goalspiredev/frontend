<script lang="ts">
    import { onMount } from "svelte";
    import "$assets/css/reset.css";
    import { sessionLoaded } from "$store/default";
    import Dashboard from "$lib/components/common/dashboard/Dashboard.svelte";
	import LoadingScreen from "$components/common/LoadingScreen.svelte";

    onMount(() => {
        sessionLoaded.set(true);
    });
</script>

{#if !$sessionLoaded}
    <LoadingScreen />
{/if}

<template>
    <Dashboard />
    <slot />
</template>