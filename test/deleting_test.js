const assert = require('assert');
const MarioChar = require('../models/mariocart');


//Describe test
describe('Deleting records',function(done){
var char;
    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function(){

            done();
        });

    });
    it('Delete one record from the database',function(done){
       
        MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
            MarioChar.findOne({name:'Mario'}).then(function(result){
                assert(result === null);
                done();
            });
        });
    
    });

});