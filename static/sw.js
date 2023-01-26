self.addEventListener('push', (event) => {
	const data = event.data.json();
	console.log(data);
	self.registration.showNotification(data.title, {
		body: data.message,
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
