const mongoose = require('mongoose');
const dbName = 'zangano';
const dbURI = process.env.DBURL; 
mongoose.Promise = Promise;

mongoose.connect(dbURI,{ useMongoClient: true})
    .then( ()=> {
        console.log(`Conected to ${dbURI} database!`);
    })
    .catch(err => next(err));