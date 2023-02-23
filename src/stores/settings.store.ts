import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { SettingsType } from '$goalspire/types/SettingsType';

let settings: SettingsType = {} as SettingsType;

if (browser) {
	let loaded = localStorage.getItem('settings');
	settings = JSON.parse(loaded ?? '{}');
}

export const storedSettings = writable(settings);

if (browser) {
	storedSettings.subscribe((value) => localStorage.setItem('settings', JSON.stringify(value)));
}
