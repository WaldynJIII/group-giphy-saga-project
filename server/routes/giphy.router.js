const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();
const BASE_URL = 'http://api.giphy.com/v1/gifs/search'
const API_KEY = process.env.API_KEY;


router.get('/', (req, res) => {
   
    axios({
        method: 'GET',
        url: `${BASE_URL}?q=${giphy}&api_key=${API_KEY}&limit=1`
    }).then((responseFromGIFY) => {

        res.send(responseFromGIFY.data.data);
    }).catch((error) => {
        console.log('Error in GET', error);
        res.sendStatus(500);
    });
});
router.post('/post', (req, res) => {
   giphy = req.data
    console.log(req.body)
       pool.query(giphy).then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});
module.exports = router;
