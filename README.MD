This repo is a set of sample utilities that could be useful if you're building a dialler on Twilio.

- check-agent-availability.js is a sample script that checks the workers available on a specific task queue.
- trigger-call.js is a sample script that creates a new phone call based on argv parameters.
- webhook-listener.js is a sample express app that will listen to status call back events and print them on the console. 
- serverless/amd-validation.js is a sample Twilio Serverless function that will receive the call triggered and process it, namely to understand if the call was answered by AMD or not.

Make sure you fill in the .env file based on the example. 



The folder Sample using TWIMLAPP includes the sample code to connect a call to a Flex workflow once the call is connected. Make sure you point it to the right workflow sid.

trigger-call.js is a sample node.js application that will trigger an outbound phone call to a target phone number and execute a TWIML APP. To use this please fill in the .env as well as the to/from addresses and the url to your twiml app.

