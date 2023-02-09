<script lang="ts">
	// Get the ID
	import { onMount } from 'svelte';
	import axios from 'axios';
	import getGoal from '$goalspire/goal/get';
	import { editGoalWhole } from '../../../../../../@goalspire/goal/edit';

	let id: string;

	onMount(() => {
		// example url: localhost:5173/dashboard/goals/done/xxxxxx
		const url = window.location.href;
		const urlParts = url.split('/');
		id = urlParts[urlParts.length - 1];

		getGoal(id).then((goal) => {
			goal.isCompleted = true;
			editGoalWhole(goal.id, goal).then(() => {
				window.location.href = '/dashboard/goals';
			});
		});
	});
</script>
