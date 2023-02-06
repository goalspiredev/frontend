self.addEventListener('push', (event) => {
	const data = event.data.json();
	let title = data.title;
	let body = data.message;
	self.registration.showNotification(title, {
		body: body,
		actions: [{ action: 'goto', title: 'Go to' }, {action: 'postpone', title: 'Postpone'}],
        requireInteraction: true,
	});
    cachedEventData = data;
});

let cachedEventData = undefined;

self.addEventListener('notificationclick', (event) => {
    console.log(cachedEventData);
	if (event.action === 'goto') {
		// go to /dashboard/goals
        event.waitUntil(self.clients.openWindow('/dashboard/goals'));
	} else if (event.action === 'postpone') {
        event.waitUntil(self.clients.openWindow('/dashboard/goals/'));
    }
	event.notification.close();
});