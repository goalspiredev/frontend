<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$components/forms/Button.svelte';
	import TagComponent from '$components/goals/TagComponent.svelte';
	import { useGoalspire } from '$goalspire/useGoalspire';

	const { createGoal } = useGoalspire;

	let title: string;
	let type: 'goal' | 'task' = 'goal';
	let priority: 'urgent' | 'important' | 'medium' | 'small' = 'medium';
	let tags: string[] = [];
	let tag: string = '';
	let date: Date;
	let desc: string;

	let loading = false;

	let error: string = '';

	function createGoalFunc() {
		loading = true;
		createGoal(title, type, priority, tags, date, desc)
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
								if (tag == '') return;
								tags = [...tags, tag];
								tag = '';
							}
						}}
					/>
					{#each tags as tag}
						<TagComponent name={tag} />
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<p style="cursor: pointer;" on:click={() => tags = tags.filter((t) => t !== tag)}>X</p>
					{/each}
				</div>
				<div class="form">
					<h1>DUE DATE:</h1>
					<input
						type="datetime-local"
						name=""
						id=""
						bind:value={date}
						min={new Date().toISOString()}
					/>
				</div>
				<div class="form">
					<h1>CREATED AT:</h1>
					{new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()}
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
			<Button color="#2AA837" on:submit={async () => createGoalFunc()}
				>{loading ? 'Loading...' : 'CREATE'}</Button
			>
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

	.add-tag {
		width: 5rem;
	}

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
