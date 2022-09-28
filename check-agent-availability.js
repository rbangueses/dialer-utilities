require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const workspace = process.env.workspace;
const taskqueue = process.env.taskqueue;

const client = require('twilio')(accountSid, authToken);

// sample code to check if any agent is available on a given queue, hardcoded
client.taskrouter.v1.workspaces(workspace)
  .taskQueues(taskqueue)
  .realTimeStatistics()
  .fetch()
  .then(task_queue_real_time_statistics => {

    for (const [index, obj] of task_queue_real_time_statistics.activityStatistics.entries()) {
        if (obj.friendly_name === "Available") {
          console.log("Available agents: ", obj.workers);
          break;
        }
      }
  });