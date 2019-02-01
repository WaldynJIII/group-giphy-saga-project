const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
<<<<<<< HEAD
  
  res.sendStatus(200);
=======
  const queryText = `SELECT * FROM "favorite" ORDER BY "id" ASC`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
>>>>>>> 3b239c18150e0e6bab2792111ea0c0ccea6c0a70
});


// add a new favorite 
router.post('/', (req, res) => {
  const fav = req.body
  console.log(req.body)
  const queryText = `INSERT INTO "favorite" ( "img_path", "category_id")
                       VALUES ($1, $2)`
  pool.query(queryText, [fav.img_path, fav.category_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.post('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
