<script lang="ts">
    import navbarLinks from '$assets/navbarLinks.json';

    export let show: boolean;

    let isUserLoggedIn: boolean = false;

    const links = isUserLoggedIn ? navbarLinks.main.loggedIn : navbarLinks.main.loggedOut;
</script>

<div class="menu { show ? 'show' : 'hidden'}">
	{#each links as link}
        <a href={link.url} on:click={() => show = false}>{link.name}</a>
        <div />
    {/each}
</div>

<style lang="scss" scoped>
    .menu {
        z-index: 9;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--white);
        padding: 6rem 1rem;
        transition: all 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        font-family: 'Quicksand', sans-serif;
    }

    a {
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        color: var(--black);
    }

    div {
        width: 75%;
        height: 2px;
        background-color: var(--black);
    }

    :last-child {
        display: none;
    }

    .show {
        transform: translateX(0);
	}

	.hidden {
        transform: translateX(100vw);
	}
</style>