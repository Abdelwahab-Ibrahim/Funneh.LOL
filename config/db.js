const { MongoClient } = require('mongodb');

let dbconnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017')
            .then((client) => {
                dbconnection = client.db('LOL_DB');
                cb();
            })
            .catch(err => {
                console.log(err);
                cb(err);
            });
    },

    getDb: () => dbconnection
}; 