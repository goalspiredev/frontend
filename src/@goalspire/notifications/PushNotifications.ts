import axios from 'axios';
import { storedToken } from '../../stores/token.store';
import jwtDecode from 'jwt-decode';
import { get } from 'svelte/store';
import type { JWTType } from '../types/JWTType';

async function subscribe() {
	let serviceWorkerDone = false;
	navigator.serviceWorker
		.register('./sw.js')
		.then((registration) => {
			console.log('Service worker registered', registration);
			serviceWorkerDone = true;
		})
		.catch((error) => {
			console.log('Service worker registration failed', error);
		});

	while (!serviceWorkerDone) {
		await new Promise((resolve) => setTimeout(resolve, 100));
	}
	const registration = await navigator.serviceWorker.getRegistration();
	//! This sometimes errors on Safari
	const subscription = await registration?.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey:
			'BDG_rvKYJZ82GR6I3fmy3_0ypb0d5zJsqcQ1dysJvvX4uSIem4ij6L55naVcjn9N7Aj8cx_XwzItafrsO7Bvovg'
	});

	const obj = JSON.parse(JSON.stringify(subscription));

	const newGuid = () => {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			const r = (Math.random() * 16) | 0,
				v = c == 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	};

	const token = get(storedToken);
	const decode: JWTType = jwtDecode(token);
	console.log(decode);

	const body = {
		UserId: decode.id,
		Id: newGuid(),
		Endpoint: obj.endpoint,
		Auth: obj.keys.auth,
		p256dh: obj.keys.p256dh
	};
	console.log(body);

	axios
		.post('https://api.goalspire.net/v1/notificationstest/register', body)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
}

export class PushNotifications {
	public static async request(callback: (granted: boolean) => void) {
		if (Notification.permission === 'granted') {
			console.log('User has already granted permission');
			callback(true);
			return true;
		} else if (Notification.permission !== 'denied') {
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					subscribe();
					console.log('User has granted permission');
					callback(true);
					return true;
				} else {
					console.log('User has denied permission');
					callback(false);
					return false;
				}
			});
		}
	}

	public static async hasGranted() {
		// await until Notification is defined
		while (typeof Notification === 'undefined') {
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		return Notification.permission === 'granted';
	}
}
