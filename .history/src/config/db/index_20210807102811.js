const mongoose = require('mongoose');

 async function connect(){

    await mongoose.connect('mongodb://localhost/my_database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
}

module.exports = {connect};