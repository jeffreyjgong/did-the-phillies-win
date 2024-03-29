const rwClient = require("./twitterClient");
const CronJob = require("cron").CronJob;

const tweet = async () => {
   
   try {
      await rwClient.v2.tweet("Please win phillies!");
      console.log("Just tweeted!");
   } catch (e) {
      console.error(e);
   }
};

tweet();

const job = new CronJob("* * * * *", ()=> {
   console.log('checking now!');
   tweet();
});


job.start();