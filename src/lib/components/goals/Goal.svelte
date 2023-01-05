<script lang="ts">
    import type {Goal} from "$goalspire/types/Goal";
    import {timeFormat} from "$utils/timeFormat.util";
    import {onMount} from "svelte";
    import TagComponent from "$components/goals/TagComponent.svelte";

    export let goalContext: Goal = {tags: []} as Goal;

    onMount(() => {
        goalContext = {
            id: "1",
            title: "Gol",
            description: "Muj gol",
            completed: false,
            deadline: "2023-01-06T14:12:07",
            tags: ["a"],
        }
    });
</script>

<div class="wrapper">
    <div class="info">
        <h2>{goalContext.title}</h2>
        {#if goalContext.tags.length > 0}

            <div class="tags">
                {#each goalContext.tags as tag}
                    <TagComponent name={tag}/>
                {/each}
            </div>
            <div class="divider"></div>
            <div class="deadline">
                <p>{timeFormat(goalContext.deadline)}</p>
            </div>

        {:else}
            <div class="deadline single">
                <p>{timeFormat(goalContext.deadline)}</p>
            </div>
        {/if}
    </div>
    <div class="action">

    </div>
</div>

<style lang="scss">
    p, h2 {
        font-family: Comfortaa, sans-serif;
    }

    .wrapper {
        //! Remove me
        margin-top: 100px;

        width: 100%;
        min-height: 60px;

        background-color: #f3f0f0;
        //box-shadow: 0px 2px 4px rgba(0, 0, 0, 1);

        .info {
            width: 20%;
            min-height: 60px;

            padding-left: 10px;

            display: grid;
            grid-template-columns: 1fr 0.25fr 1fr;
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;

            h2 {
                grid-area: 1 / 1 / 2 / 2;

                font-size: 1.7rem;
                font-weight: 600;
            }

            .tags {
                grid-area: 2 / 1 / 3 / 2;

                align-self: center;

                display: flex;
                flex-direction: row;
                gap: 10px;
                justify-content: flex-start;

                padding-right: 10px;
            }

            .divider {
                grid-area: 2 / 2 / 3 / 3;
                width: 10px;
                height: 10px;

                border-radius: 50%;

                align-self: center;

                background-color: black;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            .deadline {
                grid-area: 2 / 3 / 3 / 4;
                text-align: left;

                align-self: center;

                padding-left: 10px;
            }

            .single {
                grid-area: 2 / 1 / 3 / 2;
            }
        }
    }
</style>