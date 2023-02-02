import axios from 'axios';

async function subscribe() {
	navigator.serviceWorker
		.register('./sw.js')
		.then((registration) => {
			console.log('Service worker registered', registration);
		})
		.catch((error) => {
			console.log('Service worker registration failed', error);
		});
	const registration = await navigator.serviceWorker.getRegistration();

	const subscription = await registration?.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey:
			'BDG_rvKYJZ82GR6I3fmy3_0ypb0d5zJsqcQ1dysJvvX4uSIem4ij6L55naVcjn9N7Aj8cx_XwzItafrsO7Bvovg'
	});

	let stringifiedSubscription = JSON.stringify(subscription);
	let obj = JSON.parse(stringifiedSubscription);

	let body = {
		userId: 'c00dfd4f-70ee-4779-b627-9e4500733edc',
		id: '1d68f4f6-80de-44b5-a295-2108eb617689',
		endpoint: obj.endpoint,
		auth: obj.keys.auth,
		p256dh: obj.keys.p256dh
	};
	console.log(body);

	axios
		.post('https://api.goalspire.net/v1/notificationstest/register', {
			body
		})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
}

export class PushNotifications {
	public static async request() {
		if (Notification.permission === 'granted') {
			console.log('User has already granted permission');
		} else if (Notification.permission !== 'denied') {
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					subscribe();
					console.log('User has granted permission');
				} else {
					console.log('User has denied permission');
				}
			});
		}
	}
}
