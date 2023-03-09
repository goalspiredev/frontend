<script lang="ts">
    import {PushNotifications} from '$goalspire/notifications/PushNotifications.js';
    import {onMount} from "svelte";
    import PieGraph from "../../../lib/components/graphs/Graph.svelte";

    let notificationGranted = false;

    onMount(async () => {
        notificationGranted = await PushNotifications.hasGranted();
    })
</script>

<PieGraph/>

<button on:click={async () => {
    await PushNotifications.request((g) => {
        notificationGranted = g;
    });
        }
    } style="display: {
notificationGranted ? 'none':'flex'}">Request notification permission
</button>

<style lang="scss">
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
</style>
