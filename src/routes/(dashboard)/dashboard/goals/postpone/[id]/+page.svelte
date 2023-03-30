<script lang="ts">
	// Get the ID
	import { onMount } from 'svelte';
	import axios from 'axios';
	import getGoal from '$goalspire/goal/get';
	import { editGoalWhole } from '../../../../../../@goalspire/goal/edit';
	import { goto } from '$app/navigation';
    import getSettings from "$goalspire/settings/getSettings";
    import type {SettingsType} from "$goalspire/types/SettingsType";

	let id: string;

	onMount(async () => {
		// example url: localhost:5173/dashboard/goals/done/xxxxxx
		const url = window.location.href;
		const urlParts = url.split('/');
		id = urlParts[urlParts.length - 1];

        let settings: SettingsType = await getSettings();
        console.log(settings);
        // snoozeTime is in dd::hh::mm format
        console.log(settings.defaultSnoozeDuration);
        // let snoozeTime = settings.snooze_time.split("::");
        // let snoozeDays = parseInt(snoozeTime[0]);
        // let snoozeHours = parseInt(snoozeTime[1]);
        // let snoozeMinutes = parseInt(snoozeTime[2]);

        let snoozeDays = 0;
        let snoozeHours = 0;
        let snoozeMinutes = 0;

        snoozeDays = parseInt(settings.defaultSnoozeDuration.split("::")[0]);
        if (isNaN(snoozeDays)) {
            snoozeDays = 0;
        }
        snoozeHours = parseInt(settings.defaultSnoozeDuration.split("::")[1]);
        if (isNaN(snoozeHours)) {
            snoozeHours = 0;
        }
        snoozeMinutes = parseInt(settings.defaultSnoozeDuration.split("::")[2]);
        if (isNaN(snoozeMinutes)) {
            snoozeMinutes = 0;
        }
        console.log(snoozeDays);
        console.log(snoozeHours);
        console.log(snoozeMinutes);

		getGoal(id).then((goal) => {
			//add a day
			goal.endsAt = new Date(goal.endsAt);

			//goal.endsAt.setDate(goal.endsAt.getDate() + 1);
            // goal.endsAt.setDate(goal.endsAt.getDate() + snoozeDays);
            goal.endsAt.setHours(goal.endsAt.getHours() + snoozeHours + (snoozeDays * 24));
            goal.endsAt.setMinutes(goal.endsAt.getMinutes() + snoozeMinutes);
			console.log(goal.endsAt);
            editGoalWhole(goal.id, goal).then(() => {
				goto('/dashboard/goals');
			});
		});
	});
</script>
