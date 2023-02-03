self.addEventListener('push', (event) => {
	const data = event.data.json();
	let title = data.title;
	let body = data.message;
	self.registration.showNotification(title, {
		body: body,
		actions: [{ action: 'goto', title: 'Go to' }],
        requireInteraction: true,

	});
});

self.addEventListener('notificationclick', (event) => {
	if (event.action === 'goto') {
		// go to /dashboard/goals
        event.waitUntil(self.clients.openWindow('/dashboard/goals'));
	}
	event.notification.close();
});
