var push = require('web-push')

// console.log(JSON.stringify(push.generateVAPIDKeys()))

let vapidKeys = {"publicKey":"BDprY_5FsrUddyWTy5EzZU6t7JxQvnKs-B5east9gqUU9YDEqgXu9yJ2i5SLdNHl8SaK6xUuo8vd9gDG059ikv0","privateKey":"ED9EKRZU1WDnYYPzeDPuCDi3del2ggKUPcrfZjLaZWs"}

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

