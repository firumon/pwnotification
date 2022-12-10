self.addEventListener('push',() => {
    self.registration.sendNotification('SW Notification',{})
})