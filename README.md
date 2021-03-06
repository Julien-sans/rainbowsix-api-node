# rainbowsix-siege-api
Tool to read the r6stats API. For Rainbow Six Siege stats and player. Data extracted from r6stats.com

Uses Node.js, Express and user Id from r6stats.com

## Example:
```javascript

const RainbowSixApi = require('rainbowsix-siege-api');
const express = require('express');
const app = express();

const port = 5000;
const statsRouter = require('./routes/stats');

const R6 = new RainbowSixApi();

// userID: https://r6stats.com/stats/${userId}
// Seasons Stats: https://r6stats.com/stats/${userId}/seasonal
// Weapons Stats: https://r6stats.com/stats/${userId}/weapons

app.get('/api/stats/:userId', (req, res) => {
    const userId = req.params.userId;
    try{
        R6.stats(userId).then(response => {
            res.send(response);
        }).catch(error => {
            console.error(error)
        });
    }catch(error){
        console.error(error);
    };
});

app.use('/api/stats', statsRouter)

app.listen(port, (err) => {
  if (err) {
    throw new Error('Erreur')
  }
  console.log(`Server is listening on port ${port}`);
});

```

## Installation

```
npm i rainbowsix-siege-api --save
```

Using <https://r6stats.com/> for the API and stats
