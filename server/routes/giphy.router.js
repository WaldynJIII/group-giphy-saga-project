const express = require('express');
const router = express.Router();
const BASE_URL = 'api.giphy.com/v1/gifs/search'
const API_KEY = process.env.API_KEY;

router.get('/', (req, res) => {
    const giphy = req.query.giphy
    axios({
        method: 'GET',
        url: `${BASE_URL}?q=${giphy}&api_key=${API_KEY}&limit=5`
    }).then((responseFromGIFY) => {

        res.send(responseFromGIFY.data.data.fixed_width.url);
    }).catch((error) => {
        console.log('Error in GET', error);
        res.sendStatus(500);
    });
});