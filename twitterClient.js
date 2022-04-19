console.log("Did the Phillies win?...");

const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config();

const client = new TwitterApi({
   appKey: process.env.API_KEY,
   appSecret: process.env.API_SECRET_KEY,
   accessToken: process.env.BOT_ACCESS_TOKEN,
   accessSecret: process.env.BOT_ACCESS_TOKEN_SECRET
});

const rwClient = client.readWrite;

module.exports = rwClient;

