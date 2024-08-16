const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/options', (req, res) => {

  const sqlText = `SELECT "id", "option_text" as "optionText" FROM "options";`;

  pool.query(sqlText)
    .then((dbResult) => {
      console.log('SELECT query successful:', sqlText);
      console.log('dbResult.rows:', dbResult.rows);
      res.send(dbResult.rows);
    })
    .catch((dbErr) => {
      console.log('SELECT query failed:', sqlText);
      console.log('dbErr', dbErr);
      res.sendStatus(500);
    })
});

router.get('/entries', (req, res) => {

  const sqlText = `
                    SELECT "entries"."id", "entries"."entry_text" as "entryText", "options"."option_text" as "optionText"
                    FROM "entries"
                    JOIN "options" ON "options"."id" = "entries"."option_id";
                  `;

  pool.query(sqlText)
    .then((dbResult) => {
      console.log('SELECT query successful:', sqlText);
      console.log('dbResult.rows:', dbResult.rows);
      res.send(dbResult.rows);
    })
    .catch((dbErr) => {
      console.log('SELECT query failed:', sqlText);
      console.log('dbErr', dbErr);
      res.sendStatus(500);
    })
});

router.post('/entries', (req, res) => {

  const {newEntry, newOption} = req.body;

  const sqlText = `
                    INSERT INTO "entries"
	                    ("entry_text", "option_id")
                    VALUES
	                    ($1, $2);
                  `;

  pool.query(sqlText, [newEntry, newOption])
    .then((dbResult) => {
      console.log('SELECT query successful:', sqlText);
      console.log('dbResult.rows:', dbResult.rows);
      res.send(dbResult.rows);
    })
    .catch((dbErr) => {
      console.log('SELECT query failed:', sqlText);
      console.log('dbErr', dbErr);
      res.sendStatus(500);
    })

});

module.exports = router;
