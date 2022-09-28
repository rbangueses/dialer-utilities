const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/events', (request, response) => {
  
    // Render the webhook payload from prog voice webhook
    if(request.body.Called){
        console.log(`PV status of call to ${request.body.Called} is ${request.body.CallStatus} `);
        if (request.body.AnsweredBy && request.body.AnsweredBy != 'unknown'){
            console.log(`PV answered by: ${request.body.AnsweredBy}`)
        }
    }
    else{
        if (request.body.TaskAttributes){
            taskAttributes = JSON.parse(request.body.TaskAttributes);
        }
        console.log(`${taskAttributes.called} Event type from taskrouter: ${request.body.EventType} preferred agent: ${taskAttributes.preferred_agent}`);
        if (request.body.WorkerName){
            console.log(`${taskAttributes.called} Agent: ${request.body.WorkerName}`);
        }
    }

    response.send('hello world');
  });

// Create an HTTP server and listen for requests on port 3000
app.listen(3000, () => {
  console.log(
    'Now listening on port 3000. ' +
    'Be sure to restart when you make code changes!'
  );
});