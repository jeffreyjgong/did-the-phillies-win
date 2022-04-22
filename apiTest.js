const axios = require("axios");
require('dotenv').config();

let config = {
   headers: {
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
      "X-RapidAPI-Key": process.env.RAPID_API_KEY
   },
   params: {
      daysFrom: 2
   }
}

axios.get('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores', config).then(response => {
   phillies_results = response.data.filter(obj => {
      return (obj.home_team === 'Philadelphia Phillies' || obj.away_team === 'Philadelphia Phillies') && obj.completed;
   });

   if (Array.isArray(phillies_results) && phillies_results.length) {
      phillies_results.forEach((element, index, array) => {
         let p_score = element.scores.filter(obj => {
            return (obj.name === 'Philadelphia Phillies')
         })[0].score;
         let o_score = element.scores.filter(obj => {
            return (obj.name != 'Philadelphia Phillies')
         })[0].score;
         console.log("Phillies:", p_score, "Opponent:", o_score);
         if (p_score > o_score) {
            console.log("Hallelujah, Phillies finally fucking win!")
         } else {
            console.log("What did you expect, of course they fucking lost you stupid ass bitch.");
         }
      });
   } else {
      console.log("No Phillies games.");
   }
}).catch(error => {
   console.error(error);
})