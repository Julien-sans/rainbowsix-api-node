const request = require('request');
module.exports = class RainbowSix {

    stats(userId) {
        return new Promise((resolve, reject) => {
            if(!userId || typeof userId !== 'string') return reject(new TypeError('Invalid username'));
            let endpoint = `https://r6stats.com/api/stats/${userId}`;
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
