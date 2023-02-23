<script lang="ts">
	import TextInput from '$components/forms/TextInput.svelte';
	import Button from '$components/forms/Button.svelte';
	import type { SettingsType } from '$goalspire/types/SettingsType';
	// Sry, ale jinak to nefungovalo xD
	import { storedSettings } from '../../../stores/settings.store';
	import { onMount } from 'svelte';

	let settings: SettingsType = {} as SettingsType;

	function saveSettings() {
		storedSettings.set(settings);
	}

	function loadSettings() {
		storedSettings.subscribe((value) => {
			settings = value;
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
			<h2>Snooze time</h2>
			<TextInput name="email" bind:value={settings.snooze_time} showLabel={false} />
		</div>
		<Button on:submit={() => saveSettings()} showSlot={false}>Save</Button>
	</div>
</div>

<style lang="scss">
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
