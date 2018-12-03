const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//connect to the database before test run
before(function(done){
// Connect to mongodb
mongoose.connect('mongodb://localhost/testaroot');

mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks...')
    done();
}).on('error',function(error){
    console.log('Connection error:'.error);
});
});

// drop the characters collection before each test
beforeEach(function(done){
    //drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });


});

