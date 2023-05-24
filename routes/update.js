require('dotenv').config();
const express = require('express');
const Dbschema = require('../DBschema/DBschema');
const router = express.Router();
var vars = require('../server')
var date;
var isoDateTime;
 
  function dateTime(){
    date = new Date();
    isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
}

router.get('/', (req, res) => {
    res.send('Welcome to the Update Router');
    console.log(dBid);
});

///// UPDATE BY GET 
/*
router.get('/getupdate/:id/:pressure/:output', (req, resp) => {
    var idGet = req.params.id;
    var pressureGet = req.params.pressure;
    var outputGet = req.params.output;

    Dbschema.find({_id: idGet}).then((res) => {
        //if succeded do this block of code
        var alarmActive = res[0].device.alarmActive;
        var setpoint = res[0].device.setpoint;
        var output = res[0].device.output;
       if (res.length == 0) {
            return; 
          } else{
            var datapack = {alarmActive, setpoint, output} //info returned to station
            resp.send(datapack);
            console.log(req.params);
            
                                /////////////// OUTPUT BOOLEAN
                                if( typeof req.params.output != 'undefined'){
                                    Dbschema.updateOne({_id: idGet}, {$set:{"device.output": outputGet}}).then((res) => {
                                                                                
                                    }).catch((err) => {
                                        //catch error
                                        console.log(err); 
                                    });  }
                                /////////////// PRESSURE push array
                                if( typeof req.params.pressure != 'undefined'){
                                    dateTime();
                                    Dbschema.updateOne({_id: idGet}, {$push:{"device.data.pressure": pressureGet, "device.data.updated": isoDateTime}}).then((res) => {
                                        //if succeded do this block of code 
                                    }).catch((err) => {
                                        //catch error
                                        console.log(err);
                                    });  }
                                ///////////////
          }
      }).catch((err) => {
        //catch error
        console.log("Error res.length == 0");
        resp.status(404).json({ message: 'Error Cannot find this ID' });
      });  
       

});*/




///////// UPDATE BY POST
router.post('/', (req, resp) => {
    var idPost = req.body.id;
    var pressurePosted = req.body.pressure;
    var outputPosted = req.body.output;

    Dbschema.find({_id: idPost}).then((res) => {
        //if succeded do this block of code
        var alarmActive = res[0].device.alarmActive;
        var setpoint = res[0].device.setpoint;
        var output = res[0].device.output;
       if (res.length == 0) {
            return; 
          } else{
            var datapack = {alarmActive, setpoint, output} //info returned to station
            resp.send(datapack);
                                /////////////// OUTPUT BOOLEAN
                                if( typeof req.body.output != 'undefined'){
                                    Dbschema.updateOne({_id: idPost}, {$set:{"device.output": outputPosted}}).then((res) => {
                                                                                
                                    }).catch((err) => {
                                        //catch error
                                        console.log(err); 
                                    });  }
                                /////////////// PRESSURE push array
                                if( typeof req.body.pressure != 'undefined'){
                                    dateTime();
                                    Dbschema.updateOne({_id: idPost}, {$push:{"device.data.pressure": pressurePosted, "device.data.updated": isoDateTime}}).then((res) => {
                                        //if succeded do this block of code 
                                    }).catch((err) => {
                                        //catch error
                                        console.log(err);
                                    });  }
                                ///////////////
          }
      }).catch((err) => {
        //catch error
        console.log("Error res.length == 0");
        resp.status(404).json({ message: 'Error Cannot find this ID' });
      });   

});
///////////////

module.exports = router