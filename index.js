const rwClient = require("./twitterClient");
const CronJob = require("cron").CronJob;

let n = 2;

const tweet = async () => {
   try {
      //await rwClient.v2.tweet("Please win phillies" + "!".repeat(n));
      await rwClient.v2.tweet({"text": "Us when we win against the Rockies!", "media": "./icons/harper_waving.gif"});
      console.log("Just tweeted!");
   } catch (e) {
      console.error(e);
   }
   n++;
};

tweet();

const job = new CronJob("* * * * *", ()=> {
   console.log('tweeting now!');
   tweet();
});


job.start();