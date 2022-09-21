This is a work in progress.

twiml app.xml includes the sample code to connect a call to a Flex workflow once the call is connected. Make sure you point it to the right workflow sid.

trigger-call.js is a sample node.js application that will trigger an outbound phone call to a target phone number and execute a TWIML APP. To use this please fill in the .env as well as the to/from addresses and the url to your twiml app.

