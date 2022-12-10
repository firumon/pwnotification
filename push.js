var push = require('web-push')

//var pKeys = push.generateVAPIDKeys()
//console.log(pKeys)

let vapidKeys = {
    publicKey: 'BC3Hd1YTT8DIVx2dm1JGgXBU-RqTxF201RhRFEY4NgAvUUNO1bxMCw4VqmAWx9pf9tpOtIwj2lX7DT_t7m8huFM',
    privateKey: 'ZYtHuuTNFkZK_Bqly0Dp-xjnGdAadatff4jGexsuesA'
}

push.setVapidDetails('mailto:me@firumon.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eVnqO0WpWws:APA91bEVFQSXG5vZB-Nhs0UfnwvplwIgm6AIObLzGUYhDJSY2cb1xpF2tJuGqIrMlUXMX4orudcBpXNCs2pMkUzobq0ccu8p9MRmdvNDx8yj54Xhe3uwq-3m-8P62P9Ol0YlDiTnIYFm",
    "expirationTime": null,
    "keys": {
        "p256dh": "BMKSMRvlg1ABG7upGGpMd4IQfqLGQJU1cyUKe9vH3LBXilytn3Yk9wP2Fs9FrAeuV0WN13wpsf-7XZ5C19SpmxY",
        "auth": "KRBZ_22CDz-NnvOYgPgbow"
    }
}

push.sendNotification(sub,'HAI HAO ARE YOU')

