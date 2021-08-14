const mongoose = require('mongoose');

 async function connect(){

    try {
        await mongoose.connect('mongodb:12/my_database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
    } catch (error) {
        
    }
    
}

module.exports = {connect};