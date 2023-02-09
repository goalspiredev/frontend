<script lang="ts">
	import { timeFormat } from '$utils/timeFormat.util';
	import TagComponent from '$components/goals/TagComponent.svelte';

	export let goalContext: any = {};

	function onActionClick(context: string) {
		//TODO: Do some action
		if (context === 'done') {
			//redirect to /goals/done/id
			window.location.href = `/dashboard/goals/done/${goalContext.id}`;
		} else if (context === 'postpone') {
			window.location.href = `/dashboard/goals/postpone/${goalContext.id}`;
		}
	}
</script>

<div class="wrapper">
	<div class="info">
		<h2>{goalContext.title}</h2>
		{#if goalContext?.tags?.length > 0}
			<div class="tags">
				{#each goalContext.tags as tag}
					<TagComponent name={tag} />
				{/each}
			</div>
			<div class="divider" />
			<div class="deadline">
				<p>ends {timeFormat(goalContext.endsAt)}</p>
			</div>
		{:else}
			<div class="deadline single">
				<p>ends {timeFormat(goalContext.endsAt)}</p>
			</div>
		{/if}
	</div>
	<div class="action">
		<div class="actionButton">
			<a href={`/dashboard/goals/edit/${goalContext.id}`}>
				<button>
					<i class="far fa-calendar-plus" />
				</button>
			</a>
			<p>Edit</p>
		</div>
		<div class="actionButton">
			<button on:click={() => onActionClick('postpone')}>
				<i class="far fa-calendar-times" />
			</button>
			<p>Postpone</p>
		</div>
		<div class="actionButton">
			<button on:click={() => onActionClick('done')}>
				<i class="far fa-calendar-check" />
			</button>
			<p>Done</p>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	p,
	h2 {
		font-family: Quicksand, sans-serif;
	}

	.wrapper {
		width: 80%;
		min-height: 120px;
		padding: 5px;
		border-radius: 10px;
		background-color: #ffffff;
		border: solid 1px #e0e0e0;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		@include br-md {
			flex-direction: row;
			justify-content: space-between;
			width: 80%;
			min-height: 80px;
		}

		.info {
			min-height: 60px;

			@include br-lg {
				display: grid;
				grid-template-columns: 1fr 0.25fr 1fr;
				grid-template-rows: repeat(2, 1fr);
			}
			padding-left: 10px;

			h2 {
				grid-area: 1 / 1 / 2 / 4;

				font-size: 1.7rem;
				font-weight: 900;
				width: 100%;
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

				display: none;

				@include br-lg {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			.deadline {
				grid-area: 2 / 3 / 3 / 4;
				text-align: left;

				align-self: center;

				@include br-lg {
				}
			}

			.single {
				grid-area: 2 / 1 / 3 / 2;
			}
		}

		.action {
			display: flex;
			flex-direction: row;
			gap: 10px;

			@include br-md {
				gap: 30px;
			}
			padding-right: 10px;

			justify-content: center;
			align-items: center;

			.actionButton {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				gap: 10px;

				button {
					width: 40px;
					height: 40px;

					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 10px;

					cursor: pointer;

					i {
						font-size: 1.6rem;
						align-self: center;
						height: 20px;

						@include br-md {
							font-size: 2.5rem;
						}

						vertical-align: middle;
					}
				}

				p {
					font-size: 1rem;
					font-weight: 900;
					display: none;

					@include br-md {
						display: block;
					}
				}
			}
		}
	}
</style>
