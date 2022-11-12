<script lang="ts">
	import Loading from "$icons/Loading.svelte";
</script>

<div class="loading">
    <h1>Loading</h1>
    <Loading size="{72}" />
</div>

<style lang="scss" scoped>
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--white);
        z-index: 100;
        font-family: 'Comfortaa', sans-serif;
        font-size: 4rem;
        font-weight: 800;
        color: var(--red);
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        justify-content: center;
    }
</style>