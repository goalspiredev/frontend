<script lang="ts">
    import { onMount } from "svelte";
    import "$assets/css/reset.css";
    import { sessionLoaded } from "$store/default";
    import Loading from "$icons/Loading.svelte";
    import Dashboard from "$lib/components/common/dashboard/Dashboard.svelte";

    onMount(() => {
        sessionLoaded.set(true);
    });
</script>

{#if !$sessionLoaded}
    <div class="loading">
        <h1>Loading</h1>
        <Loading size="{72}" />
    </div>
{/if}

<template>
    <Dashboard />
    <slot />
</template>