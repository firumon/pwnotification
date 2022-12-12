var push = require('web-push')

// return console.log(JSON.stringify(push.generateVAPIDKeys()))

let vapidKeys = {"publicKey":"BPOCgjh0gFISZBTBDIANtJB3aNCObYwwRmJQQJu0EWIcjlZGzDMDCR3E8gFiUkQwaFJGjaPs4QVchoViWISZA1Y","privateKey":"I5KL9u9FUZvyzJYisOl9peWNL4bfUb-AQLEs0SGe6js"}

push.setVapidDetails('mailto:me@firumon.com', vapidKeys.publicKey, vapidKeys.privateKey)

// let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c0izaOJt1F8:APA91bF2kJG2oJb8mgLMUwVncG8SZvWoF6kmKL6sGM5KJ3cPg0Y91uTApABmRhfsmB3Mu8Va4EnpbGncaMrd7RhN_5D1wIOkpq3mkaWTilb4UWqdiFMgws1tQJt8imLl5IM1vyZ97VOe","expirationTime":null,"keys":{"p256dh":"BE4khbve1ZaIdCoc47DQP1fLY7fO4attMc_mQb8Rtzdl93A0YHKVwixWaLfxCvvr6mg_M4riCWU9gCcDvZnH7Dk","auth":"SEaMP34Du7_ZZAqEgU_97A"}}
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fQitPgRjaYY:APA91bEwen5_HQjUrj8OUQi5RAR-IACueE9idSdQihDTfrYBqnLBdlmjzZe4S--ZYTFR6QiTdxiwYJS6f-JwqrkCyaiahk4jxDmhhW0oAe0wWDFwZaME4GY1e-abInQ1D5MkYGxvJ9Yv","expirationTime":null,"keys":{"p256dh":"BILPGHsw3XYW4YpsTM16qYiUm-9b4zgLGouwypLPVQ0fULVswBbi7_v6_O4D02CHoFWeMrjg_tq8ChUbrln9Pa0","auth":"f9xRVRpsegUgux12Ygijow"}}

push.sendNotification(sub, 'Badazone')

