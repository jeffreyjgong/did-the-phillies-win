const rwClient = require("./twitterClient");

const tweet = async () => {
   try {
      await rwClient.v1.tweet("Go Phillies!");
      console.log("Just tweeted!");
   } catch (e) {
      console.error(e);
   }
};

tweet();