const assert = require('assert');
const MarioChar = require('../models/mariocart');


//Describe test
describe('Finding records',function(done){
var char;
    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function(){

            done();
        });

    });
    it('Finds one record from the database',function(done){
        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        });
    
    });

    it('Finds one record by ID from the database',function(done){
        MarioChar.findOne({_id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        });
    
    });

});