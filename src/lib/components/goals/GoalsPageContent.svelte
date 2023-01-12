<script lang="ts">
    import TextInput from "../forms/TextInput.svelte";
    import GoalList from "$components/goals/GoalList.svelte";
    import {SvelteComponent} from "svelte";

    let query: string = "";
    let sorting: string = "NAME";
    let activeFilters: string[] = [];

    let availableFilters: string[] = ["important", "school", "postponed", "work"];

    let currentGoalList;

    function changeFilterActivity(shouldBeActive: boolean, filter: string) {
        if (shouldBeActive) {
            activeFilters = [...activeFilters, filter];
        } else {
            activeFilters = activeFilters.filter(f => f !== filter);
        }

        onFiltersChanged(activeFilters, query);
    }

    function inputChanged()
    {
        onFiltersChanged(activeFilters, query);
    }

    let onFiltersChanged;
</script>

<div class="content">
    <TextInput bind:value={query} on:onInputChanged={inputChanged}>Search</TextInput>
    <div class="filters">
        {#each availableFilters as filter}
            {#if activeFilters.includes(filter)}
                <button on:click={() => changeFilterActivity(false, filter)}
                        class="selected">{filter}</button>
            {:else}
                <button on:click={() => changeFilterActivity(true, filter)} class="disabled">{filter}</button>
            {/if}
        {/each}
    </div>
    <p>Sort by: {sorting}</p>
    <GoalList filterTags={activeFilters} bind:onTagsChanged={onFiltersChanged}/>
</div>

<style lang="scss">
    h1, p {
        font-family: Inter, sans-serif;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        gap: 20px;

        width: 100%;
        height: 100%;

        padding-top: 50px;
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