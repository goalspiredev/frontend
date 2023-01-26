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
			'BHUqMPRqv8gZjxtQMvV0XcPqOyvOjBOpSJ553SyTUwjudX0bz45tFBZb6R2yy1buMuRztPAI3C0JnrZoSF1rSU4'
	});
    //TODO: Fill in server URL
	// fetch('http://localhost:3000/register', {
	// 	method: 'POST',
	// 	body: JSON.stringify(subscription),
	// 	headers: {
	// 		'content-type': 'application/json'
	// 	}
	// });
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
