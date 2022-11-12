<script lang="ts">
    import { IsLoggedIn } from '$utils/User';
    import navbarLinks from '../../../../assets/navbarLinks.json';

    let isUserLoggedIn: boolean = IsLoggedIn();

    const links = isUserLoggedIn ? navbarLinks.main.loggedIn : navbarLinks.main.loggedOut;
</script>

<div class="navbar-container">
	<h1>Goalspire</h1>
    <div class="links">
        {#each links as link}
            <a href={link.url}>{link.name}</a>
        {/each}
    </div>
</div>

<style lang="scss" scoped>
    .navbar-container {
        position: absolute;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 4rem;
    }

    h1 {
        font-family: 'Comfortaa', cursive;
		font-size: 3rem;
		font-weight: 600;
		-webkit-text-stroke: 1px var(--black);
    }

    .links {
        font-family: 'Quicksand', sans-serif;
        display: flex;
        gap: 4rem;
    }

    a {
        font-size: 1.75rem;
        font-weight: 600;
        text-decoration: none;
        color: var(--black);
    }
</style>