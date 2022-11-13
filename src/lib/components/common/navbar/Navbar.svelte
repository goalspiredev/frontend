<script lang="ts">
	import { onMount } from "svelte";
	import NavbarDesktop from "./NavbarDesktop.svelte";
	import NavbarMobile from "./NavbarMobile.svelte";

    let showMobileNavbar: boolean = true;
    let loaded: boolean = false;

    onMount(() => {
        loaded = true;
        window.innerWidth > 1024 ? showMobileNavbar = false : showMobileNavbar = true;

        onresize = () => {
            window.innerWidth > 1024 ? showMobileNavbar = false : showMobileNavbar = true;
        }
    });
</script>

<nav>
    {#if showMobileNavbar && loaded}
        <NavbarMobile />
    {:else if loaded}
        <NavbarDesktop />
    {/if}
</nav>