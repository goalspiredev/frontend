<script lang="ts">
    import type {GoalType} from "$goalspire/types/GoalType";
    import {onMount} from "svelte";
    import getGoals from "$goalspire/goal/list";
    import Graph from "$components/graphs/Graph.svelte";

    let goals: GoalType[] = [];
    $: goalsMap = new Map();

    let dataLoaded = false;

    onMount(async () => {
        goals = await getGoals();
        goals.forEach(goal => {
            const date = new Date(goal.createdAt);
            const month = date.toLocaleString('en-US', {month: 'short'});
            const count = goalsMap.get(month) || 0;
            goalsMap.set(month, count + 1);
        });
        console.log(goalsMap);
        dataLoaded = true;
    })
</script>

<div class="card">
    <h3>Goals created per month</h3>
    {#if dataLoaded}
        <Graph data={goalsMap} chartType="bar" label="Goals created"/>
    {/if}
</div>

<style lang="scss">
    .card {
        min-width: 500px;
        width: auto;
        min-height: 350px;
        height: auto;

        margin-top: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        h3 {
            font-family: 'Inter', sans-serif;
            text-align: center;
            margin-top: 10px;

            font-size: 1.6rem;
            font-weight: 700;
        }
        // card like look with drop shadow and white color and rounded corners
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
</style>