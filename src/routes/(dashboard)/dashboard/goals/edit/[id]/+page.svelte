<script lang="ts">
    import {goto} from '$app/navigation';
    import Button from '$components/forms/Button.svelte';
    import Checkbox from '$components/forms/Checkbox.svelte';
    import TagComponent from '$components/goals/TagComponent.svelte';
    import {useGoalspire} from '$goalspire/useGoalspire';
    import {onMount} from 'svelte';
    import type {PageData} from './$types';

    const {getGoal, editGoal} = useGoalspire;

    export let data: PageData;

    onMount(() => {
        getGoal(data.id).then((goal) => {
            title = goal.title;
            type = ['goal', 'task'][goal.type];
            priority = ['urgent', 'important', 'medium', 'small'][goal.priority];
            tags = goal.tags;
            dateOld = new Date(goal.endsAt);
            desc = goal.content;
            createdAt = new Date(goal.createdAt);
            completed = goal.isCompleted;
        });
    });

    let completed: boolean = false;
    let title: string;
    let type: string = 'goal';
    let priority: string = 'urgent';
    let tags: string[] = [];
    let tag: string = '';
    let date: Date | undefined = undefined;
    let dateOld: Date = new Date();
    let desc: string;
    let createdAt: Date = new Date();

    let loading = false;

    let error = '';

    function editGoalFunc() {
        loading = true;

        editGoal(data.id, title, type, priority, tags, date, dateOld, desc, completed)
            .then(() => {
                loading = false;
                goto('/dashboard/goals');
            })
            .catch((err) => {
                loading = false;
                error = err;
            });
    }
</script>

<div class="wrap">
    <div class="nevim">
        <input
                type="text"
                name=""
                id=""
                placeholder="Enter goal title..."
                bind:value={title}
                class="title"
        />
        <div class="forms">
            <div class="line"/>
            <div class="idfk">
                <div class="form">
                    <h1>TYPE:</h1>
                    <button on:click={() => (type = 'goal')}>
                        <TagComponent name="Goal" background={type == 'goal' ? '#eb4f4f' : '#A9A9A9'}/>
                    </button>
                    <button on:click={() => (type = 'task')}>
                        <TagComponent name="Task" background={type == 'task' ? '#eb4f4f' : '#A9A9A9'}/>
                    </button>
                </div>
                <div class="form">
                    <h1>PRIORITY:</h1>
                    <button on:click={() => (priority = 'urgent')}>
                        <TagComponent name="Urgent" background={priority == 'urgent' ? '#eb4f4f' : '#A9A9A9'}/>
                    </button>
                    <button on:click={() => (priority = 'important')}>
                        <TagComponent
                                name="Important"
                                background={priority == 'important' ? '#eb4f4f' : '#A9A9A9'}
                        />
                    </button>
                    <button on:click={() => (priority = 'medium')}>
                        <TagComponent name="Medium" background={priority == 'medium' ? '#eb4f4f' : '#A9A9A9'}/>
                    </button>
                    <button on:click={() => (priority = 'small')}>
                        <TagComponent name="Small" background={priority == 'small' ? '#eb4f4f' : '#A9A9A9'}/>
                    </button>
                </div>
                <div class="form">
                    <h1>TAGS:</h1>
                    <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Add tag..."
                            class="add-tag"
                            bind:value={tag}
                            on:keydown={(e) => {
							if (e.key == 'Enter') {
								tags = [...tags, tag];
								tag = '';
							}
						}}
                    />
                    {#each tags as tag}
                        <div class="tag">
                            <button on:click={() => (tags = tags.slice(tags.indexOf(tag), 1))}> x</button>
                            <TagComponent name={tag}/>
                        </div>
                    {/each}
                </div>
                <div class="form">
                    <h1>DUE DATE:</h1>
                    <p>
                        {dateOld.toLocaleDateString() + ' ' + dateOld.toLocaleTimeString()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Change to:
                    </p>
                    <input class="date" type="datetime-local" name="" id="" bind:value={date}/>
                </div>
                <div class="form">
                    <h1>CREATED AT:</h1>
                    {createdAt.toLocaleDateString() + ' ' + createdAt.toLocaleTimeString()}
                </div>
                <div class="form">
                    <h1>COMPLETED:</h1>
                    <Checkbox bind:value={completed}/>
                </div>
            </div>
        </div>
        <textarea
                class="desc"
                name=""
                id=""
                placeholder="Start typing description..."
                bind:value={desc}
        />
        {#if error}
            <p class="error">
                {error}
            </p>
        {/if}
        <div class="buts">
            <Button color="#2AA837" on:submit={async () => editGoalFunc()}>
                {loading ? 'LOADING...' : 'SAVE'}
            </Button>
            <Button
                    on:submit={() => {
					goto('/dashboard/goals');
				}}
            >
                CANCEL
            </Button>
        </div>
    </div>
</div>

<style lang="scss" scoped>
    .error {
        color: red;
    }

    .date {
        background-color: #c9c9c9;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }

    .tag {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;

        button {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.2rem;

            &:focus {
                outline: 2px solid var(--red);
                border-radius: 16px;
            }
        }
    }

    .wrap {
        width: 100%;
        height: 100%;

        font-family: 'Quicksand', sans-serif;
    }

    .nevim {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        padding-bottom: 20px;
        & > *:first-child {
            width: 80%;
        }

        //first child
        @include br-sm {
            & > *:first-child {
                width: 80%;
            }
        }
        @include br-sm {
            align-items: flex-start;
            margin-left: 2rem;
        }
    }

    .title {
        border: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        font-weight: bold;
        outline: none;

        &:focus {
            outline: 2px solid var(--red);
            border-radius: 16px;
        }

        &::placeholder {
            color: #7a7a7a;
        }
    }

    .forms {
        display: flex;

        @include br-md {
            gap: 1rem;
        }

        .line {
            display: none;
            @include br-md {
                display: flex;
            }
        }

        .form {
            flex-direction: column;
            align-items: center;

            // all texts align to center
            p {
                text-align: center;
            }

            input {
                text-align: center;
            }

            textarea {
                text-align: center;
                align-self: center;
                justify-content: center;
                justify-self: center;
            }

            @include br-md {
                flex-direction: row;
                align-items: center;
            }
        }
    }

    .line {
        width: 4px;
        height: auto;
        background: var(--red);
    }

    .idfk {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .form {
        display: flex;
        align-items: center;
        gap: 1rem;

        input {
            &:focus {
                outline: 2px solid var(--red);
                border-radius: 16px;
            }
        }

        h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.5rem;
            font-weight: bold;
        }

        button {
            cursor: pointer;

            &:focus {
                outline: 2px solid var(--red);
                border-radius: 16px;
            }
        }
    }

    .desc {
        width: 75%;
        max-width: 60rem;
        height: 15rem;
        background-color: white;
        border: 2px black solid;
        border-radius: 10px;
        resize: none;
        padding: 0.5rem;

        &:focus {
            outline: 2px solid var(--red);
            border-radius: 16px;
        }

        &::placeholder {
            color: #7a7a7a;
        }
    }

    .buts {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @include br-sm {
            flex-direction: row;
        }
    }
</style>
