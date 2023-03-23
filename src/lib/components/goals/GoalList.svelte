<script lang="ts">
    import Goal from './Goal.svelte';
    import {useGoalspire} from '$goalspire/useGoalspire';
    import {onMount} from "svelte";

    const {getGoals} = useGoalspire;

    export let filterTags: string[] = [];
    export let searchQuery: string = '';
    export let overrideAlign: boolean = false;

    let goals = [];
    let dataLoaded = false;

    export const onTagsChanged = (tags: string[], query: string) => {
        filterTags = tags;
        searchQuery = query;
    };

    onMount(async () => {
        goals = await getGoals();
        if (overrideAlign) {
            goals = goals.filter(x => x.isCompleted === false);
            goals.sort((a, b) => {
                const aDate = new Date(a.endsAt);
                const bDate = new Date(b.endsAt);
                return aDate.getTime() - bDate.getTime();
            });
            dataLoaded = true;
        } else {
            dataLoaded = true;
        }

    });
</script>
<div class="content"
     style="align-items: {overrideAlign ? 'center' : ''}; padding-bottom: {overrideAlign ? '0px' : ''};">
    {#if dataLoaded===false}
        <p>Loading...</p>
    {:else}
        {#each goals as goal}
            {#if (filterTags.length === 0 || filterTags.some((tag) => goal?.tags?.includes(tag))) && (searchQuery == null || searchQuery.trim() === '' || goal.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase()))}
                <Goal goalContext={goal}/>
            {/if}
        {/each}
    {/if}
</div>

<style lang="scss">
    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @include br-sm {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }

        gap: 1rem;

        overflow-y: auto;

        padding-bottom: 300px;
    }
</style>
