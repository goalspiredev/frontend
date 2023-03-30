<script lang="ts">
	import TextInput from '$components/forms/TextInput.svelte';
	import Button from '$components/forms/Button.svelte';
	import type { SettingsType } from '$goalspire/types/SettingsType';
	import { onMount } from 'svelte';
	import { useGoalspire } from '$goalspire/useGoalspire';

	const { getSettings, saveSettings } = useGoalspire;

	let settings: SettingsType = {} as SettingsType;

	async function loadSettings() {
		await getSettings().then((res) => {
			settings.defaultSnoozeDuration = res.defaultSnoozeDuration;
		});
	}

	let error: string = '';
	let success: string = '';

	async function ssaveSettings() {
		let split: string[] = settings.defaultSnoozeDuration.split(':');
		let time: number = Number(split[0]) * 3600 + Number(split[1]) * 60 + Number(split[2]);
		await saveSettings(time)
			.then(() => {
				error = '';
				success = 'Settings saved!';
			})
			.catch((err) => {
				success = '';
				error = err;
			});
	}

	onMount(() => {
		loadSettings();
	});
</script>

<div class="content">
	<div class="title">
		<h1>Settings</h1>
	</div>
	<div class="settings">
		<div class="snooze_time">
			<label for="snooze_time">
				<h2>Snooze time</h2>
			</label>
			<input name="snooze_time" type="time" bind:value={settings.defaultSnoozeDuration} />
		</div>
		<Button on:submit={() => ssaveSettings()}>Save</Button>
		{#if error}
			<p class="error">
				{error}
			</p>
		{/if}
		{#if success}
			<p class="success">
				{success}
			</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.error {
		color: red;
	}

	.success {
		color: green;
	}

	h1,
	h2,
	h3,
	p,
	button {
		font-family: 'Quicksand', sans-serif;
	}

	:global button {
		font-family: 'Quicksand', sans-serif;
	}

	.content {
		width: 100%;
		padding: 20px;
		margin: 20px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		.title {
			width: 100%;
			display: flex;
			justify-content: flex-start;

			h1 {
				font-size: 3rem;
				margin: 0;
				padding: 0;
			}
		}

		.settings {
			width: 100%;
			height: 100%;

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;

			gap: 30px;
		}

		overflow-y: auto;
	}
</style>
