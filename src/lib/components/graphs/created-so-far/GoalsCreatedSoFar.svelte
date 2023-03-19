<script lang="ts">
    import type {GoalType} from "$goalspire/types/GoalType";
    import {onMount} from "svelte";
    import getGoals from "$goalspire/goal/list";
    import Graph from "$components/graphs/Graph.svelte";

    let goals: GoalType[] = [];
    let dataLoaded = false;

    function getCompletedGoals() {
        let temp = goals.filter(goal => goal.isCompleted).length;
        console.log(temp);
        return temp;
    }

    onMount(async () => {
        goals = await getGoals();
        dataLoaded = true;
    })
</script>

<div class="card">
    {#if dataLoaded}
        <h3>You've created <span>{goals.length}</span> goals and tasks in total and have completed <span>{getCompletedGoals()}</span> of them
            so far.</h3>
    {/if}
</div>

<style lang="scss">
    .card {
        min-width: 150px;
        width: auto;
        min-height: 150px;
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-top: 20px;

        h3 {
            font-family: 'Inter', sans-serif;
            text-align: center;
            margin-top: 10px;

            font-size: 1.6rem;
            font-weight: 700;

            padding: 0 20px;

            span {
                font-weight: 900;
                color: #ff6b6b;
            }
        }
        // card like look with drop shadow and white color and rounded corners
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
</style>