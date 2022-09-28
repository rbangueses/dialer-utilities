/**
 * this function will run then a call is connected to a customer programmatically. It will check if the call connected
 * to an answer machine or not. In the event it is not an answer machine, we queue the call to Flex
**/

exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
  let json = { name: event.Called , preferred_agent: event.preferred_agent};

  //check if the event.AnsweredBy is an Answer Machine.
  if(event.AnsweredBy === 'machine_start'){
    //treat answer machine detected logic here
    twiml.hangup();
    callback(null, twiml);
  }

  else{
    //not an answer machine, enqueue the call to the taskrouter outbound workflow defined in the environment variables.
    twiml.enqueue({workflowSid: context.WorkflowSID})
    .task({}, JSON.stringify(json));;
  }
  return callback(null, twiml);
};