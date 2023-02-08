<script lang="ts">
	import Button from '$components/forms/Button.svelte';
	import TagComponent from '$components/goals/TagComponent.svelte';
    import { useGoalspire } from '$goalspire/useGoalspire';
	import { onMount } from 'svelte';
    import type { PageData } from './$types';

    const { getGoal, editGoal } = useGoalspire;

    export let data: PageData;

    onMount(() => {
        getGoal(data.id).then((goal) => {
            title = goal.title;
            type = ['goal', 'task'][goal.type];
            priority = ['urgent', 'important', 'medium', 'small'][goal.priority];
            dateOld = new Date(goal.endsAt);
            desc = goal.content;
            createdAt = new Date(goal.createdAt);
        });
    });

    let completed: boolean = false;
	let title: string;
	let type: string = 'goal';
	let priority: string = 'urgent';
	let date: Date = new Date();
    let dateOld: Date = new Date();
	let desc: string;
    let createdAt: Date = new Date();
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
			<div class="line" />
			<div class="idfk">
				<div class="form">
					<h1>TYPE:</h1>
					<button on:click={() => (type = 'goal')}>
						<TagComponent name="Goal" background={type == 'goal' ? '#eb4f4f' : '#A9A9A9'} />
					</button>
					<button on:click={() => (type = 'task')}>
						<TagComponent name="Task" background={type == 'task' ? '#eb4f4f' : '#A9A9A9'} />
					</button>
				</div>
				<div class="form">
					<h1>PRIORITY:</h1>
					<button on:click={() => (priority = 'urgent')}>
						<TagComponent name="Urgent" background={priority == 'urgent' ? '#eb4f4f' : '#A9A9A9'} />
					</button>
					<button on:click={() => (priority = 'important')}>
						<TagComponent
							name="Important"
							background={priority == 'important' ? '#eb4f4f' : '#A9A9A9'}
						/>
					</button>
					<button on:click={() => (priority = 'medium')}>
						<TagComponent name="Medium" background={priority == 'medium' ? '#eb4f4f' : '#A9A9A9'} />
					</button>
					<button on:click={() => (priority = 'small')}>
						<TagComponent name="Small" background={priority == 'small' ? '#eb4f4f' : '#A9A9A9'} />
					</button>
				</div>
				<div class="form">
					<h1>DUE DATE:</h1>
                    <p>{dateOld.toLocaleDateString()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Change to:</p>
					<input type="datetime-local" name="" id="" bind:value={date} />
				</div>
				<div class="form">
					<h1>CREATED AT:</h1>
					{createdAt.toLocaleDateString()}
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
		<div class="buts">
			<Button
				color="#2AA837"
				on:submit={async () => {
					await editGoal(
                        data.id,
						title,
						type,
						priority,
						date,
						desc,
                        completed,
					).then(() => {
						window.location.href = '/dashboard/goals';
					});
				}}
			>
				SAVE
			</Button>
			<Button
				on:submit={() => {
					window.location.href = '/dashboard/goals';
				}}
			>
				CANCEL
			</Button>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		height: 100%;

		font-family: 'Quicksand', sans-serif;
	}

	.nevim {
		margin-top: 4rem;
		margin-left: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.title {
		border: none;
		font-family: 'Montserrat', sans-serif;
		font-size: 2.5rem;
		font-weight: bold;
		outline: none;

		&::placeholder {
			color: #7a7a7a;
		}
	}

	.forms {
		display: flex;
		gap: 1rem;
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

		h1 {
			font-family: 'Montserrat', sans-serif;
			font-size: 1.5rem;
			font-weight: bold;
		}

		button {
			cursor: pointer;
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
