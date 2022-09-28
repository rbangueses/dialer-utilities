// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// create a new call for the outbound sample campaign
// url - twiml app orchestrating outbound call and handing over to flex queue. Includes metadata example (name)
// to - target phone number
// from - twilio number calling
client.calls
      .create({
         method: 'GET',
         url: `https://handler.twilio.com/twiml/EHxxx?name=Bob`, 
         to: '+xxxx',
         from: '+xxxx' 
       })
      .then(call => console.log(call.sid));