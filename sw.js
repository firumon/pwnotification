self.addEventListener('push',(e) => {
    let jData = e.data.json()
    e.waitUntil(
        self.registration.showNotification(jData.title,jData)
    )
})

var I = 0;
setInterval(() => {
    console.log(I += Math.random())
    if(I >= 5) {
        console.info('Console will be cleared soon');
        setTimeout(console.clear,2000 + Math.random()*1000);
        I = 0;
    }
},15000)