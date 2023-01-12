<script lang="ts">
    import type {GoalType} from "../../../@goalspire/types/GoalType";
    import Goal from "./Goal.svelte";


    export let goals: GoalType[] = [{
        id: '1',
        title: 'Learn Svelte',
        description: 'Muj gol',
        completed: false,
        deadline: '2024-01-01T18:12:07',
        tags: ['important', 'urgent']
    },
        {
            id: '2',
            title: 'Learn React',
            description: 'Reactftw',
            completed: false,
            deadline: '2024-01-01T18:12:07',
            tags: ['work']
        }
    ];

    export let filterTags: string[] = [];
    export let searchQuery: string = '';

    export const onTagsChanged = (tags: string[], query: string) => {
        filterTags = tags;
        searchQuery = query;
    }
</script>

<div class="content">
    {#each goals as goal, i}
        {#if (filterTags.length === 0 || filterTags.some(tag => goal.tags.includes(tag))) && (searchQuery == null || searchQuery.trim() === "" || goal.title.toLowerCase().includes(searchQuery.toLowerCase()))}
            <Goal goalContext={goal}/>
        {/if}
    {/each}
</div>

<style lang="scss">
    .content {
        width: 100%;
    }
</style>