const request = require('request');
module.exports = class RainbowSix {


  // userID: https://r6stats.com/stats/${userId}
  // Seasons Stats: https://r6stats.com/stats/${userId}/seasonal
  // Weapons Stats: https://r6stats.com/stats/${userId}/weapons
  
  stats(userId, seasonal) {
    return new Promise((resolve, reject) => {
      if(!userId || typeof userId !== 'string') return reject(new TypeError('Invalid username'));
      if(typeof seasonal !== 'boolean') return reject(new TypeError('Seasonal has to be a boolean'));
      let endpoint = `https://r6stats.com/api/stats/${userId}`;
      if(seasonal === true){
        endpoint = `https://r6stats.com/api/stats/${userId}/seasonal`;
      }
      request.get(endpoint, (error, response, body) => {
        if(!error && response.statusCode == '200') {
          return resolve(JSON.parse(body));
        } else {
          return reject(JSON.parse(body));
        }
      })
    })
  }

};
