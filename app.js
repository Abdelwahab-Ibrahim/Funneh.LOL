const express = require('express');
const path = require('path')

const { connectToDb, getDb } = require("./db");

const PORT = 3000;

const app = express();


// connect to DB
let db;
connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
        db = getDb();
    }
})




app.get('/', (req , res) => {
    res.status(200).sendFile(__dirname + '/404.html');
})


