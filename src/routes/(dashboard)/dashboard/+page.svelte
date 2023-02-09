<script lang="ts">
	import { PushNotifications } from '$goalspire/notifications/PushNotifications.js';
</script>

<button
	on:click={() => PushNotifications.request()}
	style="width: 100px; font-size: 20px; height: 100px; background-color: blue; color: white"
	>Request</button
>
<!--<Goal />-->
