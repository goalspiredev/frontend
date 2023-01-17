async function subscribe() {
    navigator.serviceWorker.register('./sw.js')
        .then(registration => {
            console.log('Service worker registered', registration);
        })
        .catch(error => {
            console.log('Service worker registration failed', error);
        });
    const registration = await navigator.serviceWorker.getRegistration();
    const subscription = await registration?.pushManager.subscribe({
        userVisibleOnly: true
    });
    console.log(subscription);
}

async function createExampleNotification() {
}

export class PushNotifications {
    public static async request() {
        if (Notification.permission === 'granted') {
            // subscribe();
            console.log("User has already granted permission");
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    subscribe();
                    console.log("User has granted permission");
                } else {
                    console.log("User has denied permission");
                }
            });
        }
    }
}

