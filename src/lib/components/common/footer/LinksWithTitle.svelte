<script lang="ts">
    export let title: string;
    export let links: {
        href: string;
        text: string;
    }[];
    export let align = 'flex-start';
</script>

<section style="align-items: {align}">
    <h2>{title}</h2>
    <div class="links" style="align-items: {align}">
        {#each links as link}
            <a href={link.href}>{link.text}</a>
        {/each}
    </div>
</section>

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 900;
        }

        .links {
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: flex-start;

            a {
                transition: all 0.3s;
            }

            a:hover {
                transform: scale(1.1);
                color: var(--red);
            }
        }
    }
</style>
