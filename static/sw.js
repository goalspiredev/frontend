self.addEventListener('push', (event) => {
	const data = event.data.json();
	let title = data.title;
	let body = data.message;
	self.registration.showNotification(title, {
		body: body,
		actions: [{ action: 'greet', title: 'Greet' }]
	});
});

self.addEventListener('notificationclick', (event) => {
	console.log('click me!');
	if (event.action === 'greet') {
		// Do something when the "Greet" button is clicked
		console.log('Greet button clicked');
	}
	event.notification.close();
});
