const axios = require("axios");
require('dotenv').config();

let config = {
   headers: {
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
      "X-RapidAPI-Key": process.env.RAPID_API_KEY
   },
   params: {
      daysFrom: 1
   }
}

axios.get('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores', config).then(response => {
   phillies_results = response.data.filter(obj => {
      return (obj.home_team === 'Philadelphia Phillies' || obj.away_team === 'Philadelphia Phillies') && obj.completed;
   });

   if (Array.isArray(phillies_results) && phillies_results.length) {
      
   } else {
      console.log("No Phillies games.")
   }
   console.log(phillies_results);
}).catch(error => {
   console.log('Error status', error.response.status);
   console.log(error.response.data);
})