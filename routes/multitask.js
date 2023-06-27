require('dotenv').config();
const express = require('express');
const router = express.Router();
const Dbschema = require('../DBschema/DBschema');
var date;
var isoDateTime;
function localdate(){
  date = new Date();
  isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()
  
}

//get all  
router.get('/', (req, resp) => {

  Dbschema.find({}).then((res) => {
    resp.send(res);
  }).catch((err) => {
    //catch error
  });

}); 

//update from our form  
router.post('/update', async (req, res) => {

try{
const id = req.body.id;
const location = req.body.location;


//inserting data into DB

try{
  await Dbschema.updateOne({_id: id}, {$set:{"Asset.location": location}})
  console.log(`New Location inserted (${location})`);
} catch(err){
  console.log(`Db error at ${id} at updating route`);
}




//res.end();
res.status(200).send('OK');
}
catch(error) {
  console.error('Error handling POST request:', error);
  res.status(500).send('Internal Server Error');
}

}); 


//update from our form  
router.post('/appAndroid', async (req, res) => {

  try{
  console.log(req.body);
  //res.end();
  res.status(200).send('OK');
  }
  catch(error) {
    console.error('Error handling POST request:', error);
    res.status(500).send('Internal Server Error');
  }
  
  }); 

  

//get one
router.get('/:id', getSensors, (req, res) => {
    res.json(res.sensors);
  
});
/*
//get one with filters
router.get('/filter/:id', getSensors, (req, res) => {
 var setpoint = res.sensors.device.setpoint;
 var output = res.sensors.device.output;
 var alarmActive = res.sensors.device.alarmActive;
 var bundle = {setpoint,
                output,
                alarmActive}
 res.json(bundle);
 

    
  //let lastDate = dataDate[dataDate.length - 1];

  //console.log(lastDate);

});*/


//create one   this is working good
router.post('/create', async (req, res) => {
  localdate();
  var namePosted = req.body.name;
  var kwPosted = req.body.kw;
  var locationPosted = req.body.location;
  var linkPosted = req.body.link;
  var statusPosted = Boolean(req.body.status);
  var fuelLevelPosted = Number(req.body.fuelLevel);
  var errorPosted = req.body.errors;
  var fuelDaysRemainingPosted = req.body.fuelDaysRemaining;
  var tankCapacityPosted = Number(req.body.tankCapacity);
  //console.log({namePosted, kwPosted, linkPosted, statusPosted, fuelLevelPosted});
  
   
  
  const newAsset = new Dbschema({
        
        Asset: {
            name: namePosted,
            kw: kwPosted,
            location: locationPosted,
            link: linkPosted,
            status: statusPosted,
            errors: errorPosted,
            fuelDaysRemaining: fuelDaysRemainingPosted,
            tankCapacity: tankCapacityPosted,
            data: {fuelLevel: fuelLevelPosted, updated: isoDateTime}
              
          }
          
       
  })
  try{
      const saveAsset = await newAsset.save();
      res.status(201).json(saveAsset);
      console.log("Create ok");
  } catch (err) {
      res.status(400).json({message: err.message});
  }
});



// Deleting One
router.delete('/delete/:id', getSensors, async (req, res) => {
    try {
      await res.sensors.remove()
      res.json({ message: 'Device Deleted' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

  async function getSensors(req, res, next) {
    let sensors
    try {
      sensors = await DBschema.findById(req.params.id)
      if (sensors == null) {
        return res.status(404).json({ message: 'Cannot find this ID' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.sensors = sensors
    next()
  }

 
 


module.exports = router