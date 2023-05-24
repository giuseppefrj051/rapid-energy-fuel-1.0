const mongoose = require('mongoose');
 
const apiSchema = new mongoose.Schema({

         
        Asset: {
                name: {type: String}, //Boiler
                kw: {type: String},   //300
                location: {type: String},
                link: {type: String}, // http://185.82.75.114/sdcard/cpt/app/signin.php
                status: {type: Boolean},  // ONLINE / OFFLINE
                errors: {type: Boolean},  
                fuelDaysRemaining: {type: String},
                tankCapacity: {type: Number},
                data:{
                        fuelLevel: [{type: Number, required: true}],
                        updated: [{type: Date, default: Date.now}]
                }
              }
        
});

module.exports = mongoose.model('rapid-energy-fuel', apiSchema);   //here you can set a DB name ''