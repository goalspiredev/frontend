<script lang="ts">
	import { PushNotifications } from '$goalspire/notifications/PushNotifications.js';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { storedToken } from '../../../stores/token.store';
	import type { JWTType } from '$goalspire/types/JWTType';
	import jwtDecode from 'jwt-decode';
	import GoalsCreatedMonthly from '$components/graphs/goals-creation-month/GoalsCreatedMonthly.svelte';
	import TaskGoalDistribution from '$components/graphs/task-goal-distribution/TaskGoalDistribution.svelte';
	import GoalsCreatedSoFar from "$components/graphs/created-so-far/GoalsCreatedSoFar.svelte";
	import TasksToday from "$components/tasksToday/TasksToday.svelte";


	let notificationGranted = false;

	let username = '';
	let timeOfDay = '';

	onMount(async () => {
		notificationGranted = await PushNotifications.hasGranted();
		const token = get(storedToken);
		const decode: JWTType = jwtDecode(token);
		username = decode.name;

		const hour = new Date().getHours();
		if (hour < 12) {
			timeOfDay = 'morning';
		} else if (hour < 18) {
			timeOfDay = 'afternoon';
		} else {
			timeOfDay = 'evening';
		}
	});
</script>

<div class="content">
	<h2>Good {timeOfDay}, {username}</h2>

	<div class="cards">
		<GoalsCreatedMonthly />
		<TaskGoalDistribution />
		<GoalsCreatedSoFar />
		<TasksToday />
	</div>

	<button
			on:click={async () => {
			await PushNotifications.request((g) => {
				notificationGranted = g;
			});
		}}
			style="display: {notificationGranted ? 'none' : 'flex'}"
	>Request notification permission
	</button>
</div>

<style lang="scss">
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		padding-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 50px;

		.cards {
			width: 80%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
			align-self: center;

			gap: 20px;
		}

		h2 {
			font-size: 40px;
			font-family: 'Montserrat', sans-serif;
			font-weight: 700;
			margin: 0;
		}

		button {
			border: none;
			border-radius: 10px;

			display: flex;
			justify-content: center;
			align-items: center;
			margin: 10px;
			width: auto;
			height: 50px;

			background-color: #eb4f4f;
			color: white;

			padding: 10px;

			font-size: 20px;
			font-family: 'Montserrat', sans-serif;

			cursor: pointer;

			transition: 0.2s;

			&:hover {
				background-color: #eb4f4f;
				color: white;
				box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
			}
		}
	}
</style>
