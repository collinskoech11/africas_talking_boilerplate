const credentials = {
    apiKey : 'Api_Key',
    username: 'my_first_smsapp',
}


try {
const Africastalking = require('africastalking')(credentials)
const sms = Africastalking.SMS;

function sendMessage() {
    const options = {
        to: ['+254759614089'],
        message: "I a developer",
        // from: "XXYYZZ"
    }
    sms.send(options)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}

sendMessage()
} catch (error) {
    
}
