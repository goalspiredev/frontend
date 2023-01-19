<script lang="ts">
	import Goal from '$components/goals/Goal.svelte';
	import { onMount } from 'svelte';
	import { PushNotifications } from '$goalspire/notifications/PushNotifications.js';

	onMount(() => {
		// const greeting = new Notification('Hi, How are you?', {
		//     body: 'Have a good day',
		//     icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg',
		//     actions: [
		//         {action: 'Greet', title: 'greet'},
		//     ]
		// });
		//
		// if ('actions' in Notification.prototype) {
		//     console.log('This browser supports notification actions.');
		// } else {
		//     console.log('This browser does not support notification actions.');
		// }
	});
</script>

<button
	on:click={() => PushNotifications.request()}
	style="width: 10px; font-size: 20px; height: 10px">Req</button
>
<!--<Goal />-->
