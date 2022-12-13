var push = require('web-push')

// return console.log(JSON.stringify(push.generateVAPIDKeys()))

let vapidKeys = {"publicKey":"BPOCgjh0gFISZBTBDIANtJB3aNCObYwwRmJQQJu0EWIcjlZGzDMDCR3E8gFiUkQwaFJGjaPs4QVchoViWISZA1Y","privateKey":"I5KL9u9FUZvyzJYisOl9peWNL4bfUb-AQLEs0SGe6js"}

push.setVapidDetails('mailto:me@firumon.com', vapidKeys.publicKey, vapidKeys.privateKey)

// let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c1-ELxx1r_I:APA91bF-QAvibzdmT_7DRru9gRidAyz-V61dW4CUj5aUkLQdLGG7w7XKBAXav-pO881hiImH3pm9c8q1YvY3nSKgCYV4rSn0cgbv1W4ZqqVkFP5GXmEOqoE_sufa5r_fPUHGW8mhbuC0","expirationTime":null,"keys":{"p256dh":"BFRIlM9uE7bpCZZLM0SPlJ1Na6Ntzwn3rKp7-Ykoiwbvi9KeIcpNbEsPvg_-xVwpGhnOBS2ckLeSknlZjcw1wzY","auth":"s-v_ShNz416WofJiD3E94g"}}
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c7ePClmE9vM:APA91bEvRnmP9eT4p4CAU0pkovY8HOTRlw5MCmG4IfBYD4JrYt3sq7Q5GoIcdgfu7Sy26fTufXJsN59yMKxSnRV7fdFqNpcT-ZruosHDLOLxu-MeIGH9dg5Npl-avXW-EEf062jodHPa","expirationTime":null,"keys":{"p256dh":"BG3f4I0bpYwKwa5xnOZhpTmJKx8vEMd98cDOF-GAMdyPH22o5CU1Nd5fxmPLY3mNg729WcqFgAqG6FyFqO9-a6I","auth":"S8DWN1MaxcxEa6iGtqW7ow"}}

push.sendNotification(sub, JSON.stringify({
    "title": "OKEY",
    "body": "BOOOOOOOODY",
    "actions": [{
        "action": "https://www.npmjs.com/package/web-push",
        "title": "MA ACTION ONE",
        "icon": "https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
    }],
    "icon": "https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ",
    "image": "https://i.pinimg.com/originals/3a/69/ae/3a69ae3942d4a9da6c3cbc93b1c8f051.jpg",
    "vibrate": [300,300,300]
}))

