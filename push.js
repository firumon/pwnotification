var push = require('web-push')

// return console.log(JSON.stringify(push.generateVAPIDKeys()))

let vapidKeys = {"publicKey":"BPOCgjh0gFISZBTBDIANtJB3aNCObYwwRmJQQJu0EWIcjlZGzDMDCR3E8gFiUkQwaFJGjaPs4QVchoViWISZA1Y","privateKey":"I5KL9u9FUZvyzJYisOl9peWNL4bfUb-AQLEs0SGe6js"}

push.setVapidDetails('mailto:me@firumon.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/ejCKRvxmyBQ:APA91bHGv-j0Ij44E3TKy3v8dS_CIJtdnHuA473afMbrFpxKMpQDXPBa4Q5cBIG_fuWCdrjRWnvIqlkNqQTgvb26tw8iOpiN5lG98PI5Strv__2XQxS8iZkZFNsjRQdMQFalXY2bsJxe",
    "expirationTime": null,
    "keys": {
        "p256dh": "BNXp76kuruILE1u0wjDfabIuYhYA5HGBba83vnAjdwAFshAuDt33zhRzO5ngrzYJj5swJ6FMFyFD_BZv1xmJSYY",
        "auth": "kneF9Hz4JAdyH2olZMC6Mw"
    }
}

push.sendNotification(sub, 'HAI HOW ARE YOU')

