<script lang="ts">
    import { onMount } from "svelte";
    import MobileRegisterForm from "./MobileRegisterForm.svelte";
    import DesktopRegisterForm from "./DesktopRegisterForm.svelte";


    let showMobileRegisterForm = true;
    let loaded = false;

    onMount(() => {
        loaded = true;
        window.innerWidth > 1024 ? showMobileRegisterForm = false : showMobileRegisterForm = true;

        onresize = () => {
            window.innerWidth > 1024 ? showMobileRegisterForm = false : showMobileRegisterForm = true;
        }
    });
</script>

<main>
    {#if showMobileRegisterForm && loaded}
        <MobileRegisterForm />
    {:else if loaded}
        <DesktopRegisterForm />
    {/if}
</main>

<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;

      background-color: white;
    }
</style>