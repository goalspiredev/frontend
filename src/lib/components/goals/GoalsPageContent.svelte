<script lang="ts">
    import TextInput from '../forms/TextInput.svelte';
    import GoalList from '$components/goals/GoalList.svelte';
    import {onMount} from "svelte";
    import getGoals from "$goalspire/goal/list";
    import type {GoalType} from "$goalspire/types/GoalType";
    import {writable} from "svelte/store";

    let query: string = '';
    let sorting: string = 'NAME';
    let activeFilters: string[] = [];

    let availableFilters = writable<string[]>([]);

    function changeFilterActivity(shouldBeActive: boolean, filter: string) {
        activeFilters = shouldBeActive
            ? [...activeFilters, filter]
            : activeFilters.filter((f) => f !== filter);

        onFiltersChanged(activeFilters, query);
    }

    function inputChanged() {
        onFiltersChanged(activeFilters, query);
    }

    // (tags: string[], query: string) => void
    let onFiltersChanged: (tags: string[], query: string) => void = () => {
    };

    onMount(async () => {
        let goals: GoalType[] = await getGoals();
        let tags: string[] = [];

        for (let goal of goals) {
            for (let tag of goal.tags) {
                if (!tags.some((t) => t === tag)) {
                    tags.push(tag);
                }
            }
        }

        availableFilters.set([...new Set(tags)]);
    });
</script>

<div class="content">
    <div class="search">
        <TextInput bind:value={query} on:onInputChanged={inputChanged}>Search</TextInput>
    </div>
    <div class="filters">
        {#each $availableFilters as filter}
            {#if activeFilters.includes(filter)}
                <button on:click={() => changeFilterActivity(false, filter)} class="selected"
                >{filter}</button
                >
            {:else}
                <button on:click={() => changeFilterActivity(true, filter)} class="disabled"
                >{filter}</button
                >
            {/if}
        {/each}
    </div>
    <p>Sort by: {sorting}</p>
    <GoalList filterTags={activeFilters} bind:onTagsChanged={onFiltersChanged}/>
    <a href="/dashboard/goals/create">
        <button class="createGoal">Create new Goal / Task</button>
    </a>
</div>

<style lang="scss">
    h1,
    p {
        font-family: Inter, sans-serif;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;

        gap: 20px;

        width: 100%;
        height: 100vh;

        padding-top: 50px;

        @include br-md {
            padding-left: 50px;
            align-items: flex-start;
            justify-content: flex-start;
        }

        .search {
            width: 80%;
            max-width: 500px;

            @include br-md {
                width: 100%;
            }
        }

        h1 {
            color: black;
        }

        .filters {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;

            button {
                color: white;
                font-size: 1rem;

                border-radius: 5px;
                padding: 1px 10px;

                font-family: Inter, sans-serif;
                font-weight: bold;

                cursor: pointer;
            }

            button.selected {
                background-color: var(--red);
            }

            button.disabled {
                background-color: #9f9f9f;
            }
        }

        p {
            font-size: 1.3rem;
            text-transform: uppercase;
            font-weight: bold;
        }

        button.createGoal {
            position: absolute;
            bottom: 40px;
            right: 50px;

            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            background-color: var(--red);
            font-family: Comfortaa, sans-serif;
            font-size: 1.2rem;
            color: white;

            cursor: pointer;

            transition: all 0.2s;
        }

        button.createGoal:hover {
            transform: scale(1.05);
        }
    }
</style>
