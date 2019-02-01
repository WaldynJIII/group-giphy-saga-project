const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();
const BASE_URL = 'http://api.giphy.com/v1/gifs/search'
const API_KEY = process.env.API_KEY;


router.get('/', (req, res) => {
   console.log(giphy);
   
    axios({
        method: 'GET',
        url: `${BASE_URL}?q=${giphy}&api_key=${API_KEY}&limit=5`
    }).then((responseFromGIFY) => {

        res.send(responseFromGIFY.data.data);
    }).catch((error) => {
        console.log('Error in GET', error);
        res.sendStatus(500);
    });
});
router.post('/', (req, res) => {
    console.log('giphy router', req.body.search);
    giphy = req.body.search;

    axios({
        method: 'GET',
        url: `${BASE_URL}?q=${giphy}&api_key=${API_KEY}&limit=4`
    }).then((responseFromGIFY) => {

        res.send(responseFromGIFY.data.data);
    }).catch((error) => {
        console.log('Error in GET', error);
        res.sendStatus(500);
    });

    // axios({
    //     method: 'POST',
    //     url: `${BASE_URL}?q=${giphy.search}&api_key=${API_KEY}&limit=4`,
    //     data: giphy.search
    // }).then(responseFromGIFY => {
    //     res.send(responseFromGIFY.data.data)
    // })

    
//    giphy = req.data
//     console.log(req.body)
//        pool.query(giphy).then((result) => {
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log(`Error on query ${error}`);
//             res.sendStatus(500);
//         });
});
module.exports = router;
