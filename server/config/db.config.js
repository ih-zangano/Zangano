const mongoose = require('mongoose');
const dbName = 'zangano';
const dbURI= process.env.MONGODB_URI || `mongodb://localhost/${dbName}`;
mongoose.Promise = Promise;

mongoose.connect(dbURI,{ useMongoClient: true})
    .then( ()=> {
        console.log(`Conected to ${dbName} database!`)
    })
    .catch(err => next(err));