import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let token: string = '';

if (browser) {
	token = localStorage.getItem('token') ?? token;
}

export const storedToken = writable(token);

if (browser) {
	storedToken.subscribe((value) => localStorage.setItem('token', value.toString()));
}
