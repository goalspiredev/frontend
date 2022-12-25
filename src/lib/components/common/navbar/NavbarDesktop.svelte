<script lang="ts">
    import navbarLinks from '$assets/json/navbar.json';

    let isUserLoggedIn = false;

    const links: {
        name: string;
        url: string;
    }[] = isUserLoggedIn ? navbarLinks.main.loggedIn : navbarLinks.main.loggedOut;
</script>

<div class="navbar-container">
    <a href="/">
        <h1>Goalspire</h1>
    </a>
    <div class="links">
        {#each links as link}
            {#if link.name == "Log in"}
                <a href={link.url} class="highlighted">{link.name}</a>
            {:else}
                <a href={link.url}>{link.name}</a>
            {/if}
        {/each}
    </div>
</div>

<style lang="scss" scoped>
    .navbar-container {
        position: absolute;
        width: 100%;
        padding: 2rem 4rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        z-index: 8;

        h1 {
            margin: 0;

            font-family: 'Comfortaa', cursive;
            font-size: 3rem;
            font-weight: 600;
            -webkit-text-stroke: 1px var(--black);
        }

        .links {
            display: flex;
            gap: 4rem;
            font-family: 'Quicksand', sans-serif;

            a {
                font-size: 1.75rem;
                font-weight: 600;
                text-decoration: none;
                color: var(--black);
            }

            .highlighted {
                color: var(--red);

                //pulsing animation
                animation: pulse 1.5s infinite;

                @keyframes pulse {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            }

        }
    }
</style>
