<script lang="ts">
    import type {Goal} from "$goalspire/types/Goal";
    import {onMount} from "svelte";

    export let goalContext: Goal = {tags: []} as Goal;

    onMount(() => {
        goalContext = {
            id: "1",
            title: "Gol",
            description: "Muj gol",
            completed: false,
            deadline: "zitra",
            tags: ["tag1", "tag2"],
        }
    });
</script>

<div class="wrapper">
    <div class="info">
        <h2>{goalContext.title}</h2>
        <div class="tags">
            {#each goalContext.tags as tag}
                <p>{tag}</p>
            {/each}
        </div>
        <div class="divider">.</div>
        <p>{goalContext.deadline}</p>
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
            width: 40%;
            background-color: yellow;
            min-height: 100%;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;

            h2 {
                grid-area: 1 / 1 / 2 / 2;
            }

            .tags {
                grid-area: 2 / 1 / 3 / 2;

                display: flex;
                flex-direction: row;
            }

            .divider {
                grid-area: 2 / 2 / 3 / 3;
                width: 1px;
                height: 1px;
            }

            p {
                grid-area: 2 / 3 / 3 / 4;
            }
        }
    }
</style>