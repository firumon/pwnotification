self.addEventListener('push',(e) => {
    let jData = e.data.json()
    e.waitUntil(
        self.registration.showNotification(jData.title,jData)
    )
})