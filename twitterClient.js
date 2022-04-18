console.log("Did the Phillies win?...");

const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config();

const client = new TwitterApi({
   appKey: process.env.API_KEY,
   appSecret: process.env.API_SECRET_KEY,
   accessToken: process.env.ACCESS_TOKEN,
   accessSecret: process.env.ACCESS_TOKEN_SECRET
});

const rwClient = client.readWrite;

const tweet = async () => {
   try {
      await client.v2.tweet("hello");
      console.log("Just tweeted!");
   } catch (e) {
      console.error(e);
   }
};

tweet();

module.exports = rwClient;

