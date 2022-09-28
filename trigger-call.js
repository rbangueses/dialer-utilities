/***
 * Example app that when invoked via cmd triggers a phone call, with or without AMD
 * Example execute without AMD: node trigger-call.js <to phone number ie +447111111111> <preferred agent ie Bob>
 * Example execute with AMD: node trigger-call.js <to phone number> <preferred agent> AMD
 * 
 * Note: please make sure you fill in both the to and the preferred agent fields. 
 * Preferred agent requires taskrouter config, this is just to show how we can pass metadata across.
 *  */ 


require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const statusCallback = process.env.statusCallback;
const AMDOutputValidator = process.env.AMDOutputValidator;
const TwilioFromNumber = process.env.TwilioFromNumber;

const client = require('twilio')(accountSid, authToken);

const to = process.argv[2];
const preferred_agent = process.argv[3];
let AMD = false;
if(process.argv[4] === 'AMD')
    AMD = true;

// create a new call for the outbound sample campaign
if(AMD){
    client.calls
      .create({
         method: 'GET',
         statusCallback: statusCallback,
         statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
         statusCallbackMethod: 'POST',
         machineDetection: 'Enable',
         AsyncAmdStatusCallback : statusCallback,
         AsyncAMD : 'false',
         MachineDetectionTimeout : '3',
         MachineDetectionSpeechThreshold : '1000',
         MachineDetectionSpeechEndThreshold: '500',
         MachineDetectionSilenceTimeout: '2000',
         url: AMDOutputValidator+`preferred_agent=${preferred_agent}`,
         to: to,
         from: TwilioFromNumber
       })
      .then(call => console.log(call.sid));
}
else {
    client.calls
      .create({
         method: 'GET',
         statusCallback: statusCallback,
         statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
         statusCallbackMethod: 'POST',
         url: AMDOutputValidator+`preferred_agent=${preferred_agent}`,
         to: to,
         from: TwilioFromNumber
       })
      .then(call => console.log(call.sid));
}