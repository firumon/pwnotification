self.addEventListener('push',(e) => {
    console.info('PUSH EVENT ON SW');
    console.log(e.data.text())
    // e.waitUntil(
    //     self.registration.sendNotification('SW Notification',{})
    // )
})

var I = 0;
setInterval(() => {
    console.log(I += Math.random())
    if(I >= 5) {
        console.info('Console will be cleared soon');
        setTimeout(console.clear,2000 + Math.random()*1000);
        I = 0;
    }
},5000)