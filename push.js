var push = require('web-push')

//var pKeys = push.generateVAPIDKeys()
//console.log(pKeys)

let vapidKeys = {
    publicKey: 'BC3Hd1YTT8DIVx2dm1JGgXBU-RqTxF201RhRFEY4NgAvUUNO1bxMCw4VqmAWx9pf9tpOtIwj2lX7DT_t7m8huFM',
    privateKey: 'ZYtHuuTNFkZK_Bqly0Dp-xjnGdAadatff4jGexsuesA'
}

push.setVapidDetails('mailto:me@firumon.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {}

push.sendNotification(sub,'HAI HAO ARE YOU')

