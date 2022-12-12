self.addEventListener('push',(e) => {
    e.waitUntil(
        self.registration.sendNotification('Notification From PUSH',{ body:e.data.text(),icon:'https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280__340.png' })
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
},5000)