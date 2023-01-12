<script lang="ts">
    import TextInput from "../forms/TextInput.svelte";

    let query: string = "";
    let sorting: string = "NAME";
    let activeFilters: string[] = [];

    let availableFilters: string[] = ["Important", "School", "Postponed"];
</script>

<div class="content">
    <TextInput bind:value={query}>Search</TextInput>
    <div class="filters">
        {#each availableFilters as filter}
            {#if activeFilters.includes(filter)}
                <button on:click={() => activeFilters = activeFilters.filter(f => f !== filter)}
                        class="selected">{filter}</button>
            {:else}
                <button on:click={() => activeFilters = [...activeFilters, filter]} class="disabled">{filter}</button>
            {/if}
        {/each}
    </div>
    <p>Sort by: {sorting}</p>
</div>

<style lang="scss">
    h1, p {
        font-family: Inter, sans-serif;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        width: 100vw;
        height: 100vh;

        padding-top: 100px;
        padding-left: 50px;

        h1 {
            color: black;
        }

        .filters {
            display: flex;
            gap: 10px;

            button {
                color: white;
                font-size: 1rem;

                border-radius: 5px;
                padding: 1px 10px;

                font-family: Inter, sans-serif;
                font-weight: bold;
            }

            button.selected {
                background-color: var(--red);
            }

            button.disabled {
                background-color: #9F9F9F;
            }
        }

        p {
            font-size: 1.3rem;
            text-transform: uppercase;
            font-weight: bold;
        }
    }
</style>