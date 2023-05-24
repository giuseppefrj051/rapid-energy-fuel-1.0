// https://careful-rose-yoke.cyclic.app
require('dotenv').config();
const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;
const Dbschema = require('./DBschema/DBschema');
const multitask = require('./routes/multitask');
var server = app.listen(port, listening);
var ip = require('ip');
var ipVar = ip.address();


app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/multitask', multitask);
app.use(express.static('landing'));
app.all('*', (req, res) => {res.status(404).send('<h1>404! Wrong Route, Sorry </h1>');}); 

//TIMING
const checkHour = 09;
const checkMinit = 00;
const intervalTime = 10000;
var date;
var isoDateTime;
var hour;
var min;
var checkDone = false;

//WEB Scraping elements GENERAL
const user = 'DebraFougere';
const pass = 'DebRapid123#';
const nameIdWeb = '#Label_22'; 
const tankIdWeb = '#Label_13';
const userInputId = '#username';
const passInputId = '#password';
const loginbutton = '#signinBtn';

// Asset 1  H0102
const loginlink1 = 'http://185.196.94.19/sdcard/cpt/app/signin.php';
const overviewLink1 = 'http://185.196.94.19/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId1 = '6452d9697207b705ed31358b'; 
var name1;
var online1 = false;
var error1 = false;
var tankVolume1;
var fuelDaysRemaining1;


// Asset 2  H0202 
const loginlink2 = 'http://185.196.94.17/sdcard/cpt/app/signin.php';
const overviewLink2 = 'http://185.196.94.17/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId2 = '6452d9837207b705ed31358f'; 
var name2;
var online2 = false;
var error2 = false;
var tankVolume2;
var fuelDaysRemaining2;

// Asset 3  H0113 
const loginlink3 = 'http://154.60.77.245/sdcard/cpt/app/signin.php';
const overviewLink3 = 'http://154.60.77.245/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId3 = '6452d9b27207b705ed313591'; 
var name3;
var online3 = false;
var error3 = false;
var tankVolume3;
var fuelDaysRemaining3;

// Asset 4  H0213 NEEDS CONTROLLER UPDATE
const loginlink4 = 'http://154.62.179.32/sdcard/cpt/app/signin.php';
const overviewLink4 = 'http://154.62.179.32/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId4 = '6452da9a7207b705ed313595'; 
var name4;
var online4 = false;
var error4 = false;
var tankVolume4;
var fuelDaysRemaining4;

// Asset 5  H0313 
const loginlink5 = 'http://154.60.78.228/sdcard/cpt/app/signin.php';
const overviewLink5 = 'http://154.60.78.228/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId5 = '6452dc197207b705ed313599'; 
var name5;
var online5 = false;
var error5 = false;
var tankVolume5;
var fuelDaysRemaining5;

// Asset 6  H0413 
const loginlink6 = 'http://185.82.75.115/sdcard/cpt/app/graphic.php';
const overviewLink6 = 'http://185.82.75.115/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId6 = '6452dc197207b705ed313599'; 
var name6;
var online6 = false;
var error6 = false;
var tankVolume6;
var fuelDaysRemaining6;

// Asset 7  H0513
const loginlink7 = 'http://185.82.75.114/sdcard/cpt/app/signin.php';
const overviewLink7 = 'http://185.82.75.114/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId7 = '6452dd257207b705ed31359d'; 
var name7;
var online7 = false;
var error7 = false;
var tankVolume7;
var fuelDaysRemaining7;

// Asset 8  H0613
const loginlink8 = 'http://185.82.75.113/sdcard/cpt/app/signin.php';
const overviewLink8 = 'http://185.82.75.113/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId8 = '645b608db7f3b7374d843df2'; 
var name8;
var online8 = false;
var error8 = false;
var tankVolume8;
var fuelDaysRemaining8;

// Asset 9  H0713
const loginlink9 = '';
const overviewLink9 = '';
const dbId9 = '645b624ab7f3b7374d843df6'; 
var name9;
var online9 = false;
var error9 = false;
var tankVolume9;
var fuelDaysRemaining9;

// Asset 10  H0165
const loginlink10 = '';
const overviewLink10 = '';
const dbId10 = '645b6306b7f3b7374d843df8'; 
var name10;
var online10 = false;
var error10 = false;
var tankVolume10;
var fuelDaysRemaining10;

// Asset 11  H0265
const loginlink11 = '';
const overviewLink11 = '';
const dbId11 = '645b63e1b7f3b7374d843dfa'; 
var name11;
var online11 = false;
var error11 = false;
var tankVolume11;
var fuelDaysRemaining11;

// Asset 12  H0365
const loginlink12 = '';
const overviewLink12 = '';
const dbId12 = '645b643db7f3b7374d843dfc'; 
var name12;
var online12 = false;
var error12 = false;
var tankVolume12;
var fuelDaysRemaining12;

// Asset 13  H0465
const loginlink13 = '';
const overviewLink13 = '';
const dbId13 = '645b649ab7f3b7374d843dfe'; 
var name13;
var online13 = false;
var error13 = false;
var tankVolume13;
var fuelDaysRemaining13;

// Asset 14  H0565
const loginlink14 = '';
const overviewLink14 = '';
const dbId14 = '645b64f7b7f3b7374d843e00'; 
var name14;
var online14 = false;
var error14 = false;
var tankVolume14;
var fuelDaysRemaining14;

// Asset 15  H0156
const loginlink15 = 'http://154.60.77.247/sdcard/cpt/app/signin.php';
const overviewLink15 = 'http://154.60.77.247/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId15 = '645b6751b7f3b7374d843e02'; 
var name15;
var online15 = false;
var error15 = false;
var tankVolume15;
var fuelDaysRemaining15;

// Asset 16  H0256
const loginlink16 = 'http://154.60.77.248/sdcard/cpt/app/signin.php';
const overviewLink16 = 'http://154.60.77.248/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId16 = '645b6b1fb7f3b7374d843e04'; 
var name16;
var online16 = false;
var error16 = false;
var tankVolume16;
var fuelDaysRemaining16;

// Asset 17  H0356
const loginlink17 = 'http://154.60.77.246/sdcard/cpt/app/signin.php';
const overviewLink17 = 'http://154.60.77.246/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId17 = '645b6ff8b7f3b7374d843e07'; 
var name17;
var online17 = false;
var error17 = false;
var tankVolume17;
var fuelDaysRemaining17;

// Asset 18  H0456
const loginlink18 = 'http://154.60.77.249/sdcard/cpt/app/signin.php';
const overviewLink18 = 'http://154.60.77.249/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId18 = '646c6506ea06d5f99b4067e1'; 
var name18;
var online18 = false;
var error18 = false;
var tankVolume18;
var fuelDaysRemaining18;

// Asset 19  H0756
const loginlink19 = 'http://185.196.94.239/sdcard/cpt/app/signin.php';
const overviewLink19 = 'http://185.196.94.239/sdcard/cpt/app/graphic.php?grname=Boiler.gr';
const dbId19 = '646e437887356658136855a2'; 
var name19;
var online19 = false;
var error19 = false;
var tankVolume19;
var fuelDaysRemaining19;

    
//FUNCTIONS
const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function listening() {
    console.log(`Server Live at ${ipVar}:${port}`);
}
function dateTime(){
    date = new Date();
    isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
    return isoDateTime;
}
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGODB_URI);
        dateTime(); 
        console.log(`Connected to database at ${isoDateTime}`)
    } catch(error) {
        console.log(error);
        process.exit();
    }

    
}

async function scheduleReading(){
    date = new Date();
    isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
    hour = date.getHours(); 
    min = date.getMinutes();
    
    
    if (hour === checkHour && min === checkMinit && checkDone === false) {
    console.log("Starting to read assets");
    assetsReading();
    checkDone = true;
    }
    if (min != checkMinit) {
        if(min != checkMinit && checkDone === true){
            //fuelPrediction1(); // RUN THIS ONCE AFTER assetsReading();
            //fuelPrediction2();
            console.log('fuel predicion should run');
        }
    checkDone = false; // this is to reset the condition to call on schedule once
    }

    
    //updatedChecker();

    
    

    
    
}

async function assetsReading(){


    browser = await puppeteer.launch({headless: true, defaultViewport: null, ignoreDefaultArgs: ['--enable-automation'], args: ['--disable-setuid-sandbox'], 'ignoreHTTPSErrors': true });
    const page = await browser.newPage();
    
    
try{// Asset 1
     
                                console.log('Inspecting Asset 1');
                                await page.goto(loginlink1, {waitUntil: "domcontentloaded"});
                               
                                try{
                                    
                                    online1 = true; 
                                    await page.waitForSelector(userInputId);
                                    await page.type(userInputId, user, {delay: 50});
                                    await page.type(passInputId, pass, {delay: 50});
                                    console.log(`Loging as ${user}`)
                                    await page.click(loginbutton);
                                    await page.waitForNavigation();
                                    await page.goto(overviewLink1, {waitUntil: "domcontentloaded",});
    
                                    console.log('awaiting 3 seconds');
                                    await delay(3000);
                                    
                                    await page.waitForSelector(nameIdWeb);
                                    name1 = await page.$$eval(nameIdWeb, name1 => name1.map( name1 => name1.innerText));
                                    tankVolume1 = await page.$$eval(tankIdWeb, tankVolume1 => tankVolume1.map( tankVolume1 => tankVolume1.innerText));
                                    
                                    
                                    name1 = name1[0];
                                    tankVolume1 = tankVolume1[0].substr(22, 4); 
                                    console.log(`Asset 1 results are :`);
                                    console.log({name1, tankVolume1});
                                    
    
                                    //DATA VALIDATION:
                                    if(typeof name1 === 'undefined'){console.log('data 1 = undefined'); return(err);}
                                    if(typeof tankVolume1 === 'undefined'){console.log('tankVolume1 = undefined'); return(err);}
                                    tankVolume1 = Number(tankVolume1);
                                    if(tankVolume1 === 0){console.log('tankVolume1 = 0');} // to check if it is the wrong object strg to number returns 0
    
                        
    
                                    //DataBase Insert Here
                                    dateTime();
                                    error1 = false; // to tell that there are no internal errors 
                                            try{
                                                await Dbschema.updateOne({_id: dbId1}, {$set:{"Asset.status": online1, "Asset.name": name1, "Asset.errors": error1}})

                                                await Dbschema.updateOne({_id: dbId1}, {$push:{"Asset.data.fuelLevel": tankVolume1, "Asset.data.updated": isoDateTime}});
                                            } catch(err){
                                                console.log('Db error')
                                            }
                                    
    
                                    
                                    
    
                                    } catch(err){
                                        error1 = true;
                                        console.log('error fetching data on asset 1')
                                                        try{
                                                            await Dbschema.updateOne({_id: dbId1}, {$set:{"Asset.errors": error1}});
                        
                                                        } catch(err){
                                                            console.log('Db error on error catch asset 1')
                                                        }
                                    }
    
} catch(err){ // END of Asset 1
        online1 = false; 
        console.log('Asset 1 Offline')
        try{
            await Dbschema.updateOne({_id: dbId1}, {$set:{"Asset.status": online1}});

        } catch(err){
            console.log('Db error asset 1')
        }
}


    
try { //Asset 2
                            console.log('Inspecting Asset 2');
                            await page.goto(loginlink2, {waitUntil: "domcontentloaded"});
                            try{
                                
                                online2 = true; 
                                await page.waitForSelector(userInputId);
                                await page.type(userInputId, user, {delay: 50});
                                await page.type(passInputId, pass, {delay: 50});
                                console.log(`Loging as ${user}`)
                                await page.click(loginbutton);
                                await page.waitForNavigation();
                                await page.goto(overviewLink2, {waitUntil: "domcontentloaded",});

                                console.log('awaiting 3 seconds');
                                await delay(3000);
                                
                                await page.waitForSelector(nameIdWeb);
                                name2 = await page.$$eval(nameIdWeb, name2 => name2.map( name2 => name2.innerText));
                                tankVolume2 = await page.$$eval(tankIdWeb, tankVolume2 => tankVolume2.map( tankVolume2 => tankVolume2.innerText));
                                
                                
                                name2 = name2[0];
                                tankVolume2 = tankVolume2[0].substr(22, 4); 
                                console.log(`Asset 2 results are :`);
                                console.log({name2, tankVolume2});
                                    
    
                                //DATA VALIDATION:
                                if(typeof name2 === 'undefined'){console.log('data 2 = undefined'); return(err);}
                                if(typeof tankVolume2 === 'undefined'){console.log('tankVolume2 = undefined'); return(err);}
                                tankVolume2 = Number(tankVolume2);
                                if(tankVolume2 === 0){console.log('tankVolume2 = 0');} // to check if it is the wrong object strg to number returns 0
    
                                    
                                    //console.log({name2});
                                    //console.log({tankVolume2});
    
                                    //DataBase Insert Here
                                    dateTime();
                                    error2 = false; // to tell that there are no internal errors 
                                    try{
                                        await Dbschema.updateOne({_id: dbId2}, {$set:{"Asset.status": online2, "Asset.name": name2, "Asset.errors": error2}})

                                        await Dbschema.updateOne({_id: dbId2}, {$push:{"Asset.data.fuelLevel": tankVolume2, "Asset.data.updated": isoDateTime}});
                                    } catch(err){
                                        console.log('Db error on asset 2')
                                    }

                            



                            } catch(err){
                                error2 = true;
                                console.log('error fetching data on asset 2')
                                        try{
                                            await Dbschema.updateOne({_id: dbId2}, {$set:{"Asset.errors": error2}});

                                        } catch(err){
                                            console.log('Db error on catch err asset 2')
                                        }
                            }

} catch(err){// END of Asset 2
        online2 = false; 
        console.log('Asset 2 Offline')
        try{
            await Dbschema.updateOne({_id: dbId2}, {$set:{"Asset.status": online2}});

        } catch(err){
            console.log('Db error on catch err asset 2')
        }
}


    try{// Asset 3
        console.log('Inspecting Asset 3');
        await page.goto(loginlink3, {waitUntil: "domcontentloaded"});

        try{
            online7 = true; 
            await page.waitForSelector(userInputId);
            await page.type(userInputId, user, {delay: 50});
            await page.type(passInputId, pass, {delay: 50});
            console.log(`Loging as ${user}`)
            await page.click(loginbutton);
            await page.waitForNavigation();
            await page.goto(overviewLink3, {waitUntil: "domcontentloaded",});

            console.log('awaiting 3 seconds');
            await delay(3000);
            
            await page.waitForSelector(nameIdWeb);
            name3 = await page.$$eval(nameIdWeb, name3 => name3.map( name3 => name3.innerText));
            tankVolume3 = await page.$$eval(tankIdWeb, tankVolume3 => tankVolume3.map( tankVolume3 => tankVolume3.innerText));
                                    
                                    
            name3 = name3[0];
            tankVolume3 = tankVolume3[0].substr(22, 4); 
            console.log(`Asset 3 results are :`);
            console.log({name3, tankVolume3});
            

            //DATA VALIDATION:
            if(typeof name3 === 'undefined'){console.log('data 3 = undefined'); return(err);}
            if(typeof tankVolume3 === 'undefined'){console.log('tankVolume3 = undefined'); return(err);}
            tankVolume3 = Number(tankVolume3);
            if(tankVolume3 === 0){console.log('tankVolume3 = 0');} // to check if it is the wrong object strg to number returns 0


            //DataBase Insert Here
            dateTime();
            error3 = false; // to tell that there are no internal errors 
                    try{
                        await Dbschema.updateOne({_id: dbId3}, {$set:{"Asset.status": online3, "Asset.name": name3, "Asset.errors": error3}})

                        await Dbschema.updateOne({_id: dbId3}, {$push:{"Asset.data.fuelLevel": tankVolume3, "Asset.data.updated": isoDateTime}});
                    } catch(err){
                        console.log('Db error at asset 3 insert')
                    }
                    
            } catch(err){
                error3 = true;
                console.log('error fetching data on asset 3')
                                try{
                                    await Dbschema.updateOne({_id: dbId3}, {$set:{"Asset.errors": error3}});

                                } catch(err){
                                    console.log('Db error on error catch asset 3')
                                }
            }

} catch(err){ // END of Asset 3
online3 = false; 
console.log('Asset 3 Offline')
try{
await Dbschema.updateOne({_id: dbId3}, {$set:{"Asset.status": online3}});

} catch(err){
console.log('Db error asset 3 last statement')
}
}



try{// Asset 4 HO213 NEEDS CONTROLLER UPDATE
    console.log('Inspecting Asset 4 H0213 NEEDS CONTROLLER UPDATE');
    await page.goto(loginlink4, {waitUntil: "domcontentloaded"});

    try{
        
        online4 = true; 
        name4 = "H0213";
        dateTime();
        error4 = false; // to tell that there are no internal errors 
                try{
                    await Dbschema.updateOne({_id: dbId4}, {$set:{"Asset.status": online4, "Asset.name": name4, "Asset.errors": error4}})

                    await Dbschema.updateOne({_id: dbId4}, {$push:{"Asset.data.fuelLevel": tankVolume4, "Asset.data.updated": isoDateTime}});
                    console.log('Asset 4 results are:');
                    console.log({name4, online4});
                } catch(err){
                    console.log('Db error at asset 4')
                }

        } catch(err){
            error4 = true;
            console.log('error fetching data on asset 4')
                            try{
                                await Dbschema.updateOne({_id: dbId4}, {$set:{"Asset.errors": error4}});

                            } catch(err){
                                console.log('Db error on error catch asset 4')
                            }
        }

} catch(err){ // END of Asset 4
online4 = false; 
console.log('Asset 4 Offline')
try{
await Dbschema.updateOne({_id: dbId4}, {$set:{"Asset.status": online4}});

} catch(err){
console.log('Db error asset 4')
}
}     



try{// Asset 5
     
    console.log('Inspecting Asset 5');
    await page.goto(loginlink5, {waitUntil: "domcontentloaded"});
   
    try{
        
        online5 = true; 
        await page.waitForSelector(userInputId);
        await page.type(userInputId, user, {delay: 50});
        await page.type(passInputId, pass, {delay: 50});
        console.log(`Loging as ${user}`)
        await page.click(loginbutton);
        await page.waitForNavigation();
        await page.goto(overviewLink5, {waitUntil: "domcontentloaded",});

        console.log('awaiting 3 seconds');
        await delay(3000);
        
        await page.waitForSelector(nameIdWeb);
        name5 = await page.$$eval(nameIdWeb, name5 => name5.map( name5 => name5.innerText));
        tankVolume5 = await page.$$eval(tankIdWeb, tankVolume5 => tankVolume5.map( tankVolume5 => tankVolume5.innerText));
        
        
        name5 = name5[0];
        tankVolume5 = tankVolume5[0].substr(22, 4); 
        console.log(`Asset 5 results are :`);
        
        

        //DATA VALIDATION:
        if(typeof name5 === 'undefined'){console.log('data 5 = undefined'); return(err);}
        if(typeof tankVolume5 === 'undefined'){console.log('tankVolume5 = undefined'); return(err);}
        tankVolume5 = Number(tankVolume5);
        if(tankVolume5 === 0){console.log('tankVolume5 = 0');} // to check if it is the wrong object strg to number returns 0



        //DataBase Insert Here
        dateTime();
        error5 = false; // to tell that there are no internal errors 
                try{
                    await Dbschema.updateOne({_id: dbId5}, {$set:{"Asset.status": online5, "Asset.name": name5, "Asset.errors": error5}})

                    await Dbschema.updateOne({_id: dbId5}, {$push:{"Asset.data.fuelLevel": tankVolume5, "Asset.data.updated": isoDateTime}});
                    console.log({name5, tankVolume5, online5});
                } catch(err){
                    console.log('Db error asset 5')
                }
        

        
        

        } catch(err){
            error5 = true;
            console.log('error fetching data on asset 5')
                            try{
                                await Dbschema.updateOne({_id: dbId5}, {$set:{"Asset.errors": error5}});

                            } catch(err){
                                console.log('Db error on error catch asset 5')
                            }
        }

} catch(err){ // END of Asset 5
online5 = false; 
console.log('Asset 5 Offline')
try{
await Dbschema.updateOne({_id: dbId5}, {$set:{"Asset.status": online5}});

} catch(err){
console.log('Db error asset 5')
}
}


try{// Asset 6
     
    console.log('Inspecting Asset 6');
    await page.goto(loginlink6, {waitUntil: "domcontentloaded"});
   
    try{
        
        online6 = true; 
        await page.waitForSelector(userInputId);
        await page.type(userInputId, user, {delay: 50});
        await page.type(passInputId, pass, {delay: 50});
        console.log(`Loging as ${user}`)
        await page.click(loginbutton);
        await page.waitForNavigation();
        await page.goto(overviewLink6, {waitUntil: "domcontentloaded",});

        console.log('awaiting 3 seconds');
        await delay(3000);
        
        await page.waitForSelector(nameIdWeb);
        name6 = await page.$$eval(nameIdWeb, name6 => name6.map( name6 => name6.innerText));
        tankVolume6 = await page.$$eval(tankIdWeb, tankVolume6 => tankVolume6.map( tankVolume6 => tankVolume6.innerText));
        
        
        name6 = name6[0];
        tankVolume6 = tankVolume6[0].substr(22, 4); 
        console.log(`Asset 6 results are :`);
        console.log({name6, tankVolume6});
        

        //DATA VALIDATION:
        if(typeof name6 === 'undefined'){console.log('data 6 = undefined'); return(err);}
        if(typeof tankVolume6 === 'undefined'){console.log('tankVolume6 = undefined'); return(err);}
        tankVolume6 = Number(tankVolume6);
        if(tankVolume6 === 0){console.log('tankVolume6 = 0');} // to check if it is the wrong object strg to number returns 0



        //DataBase Insert Here
        dateTime();
        error6 = false; // to tell that there are no internal errors 
                try{
                    await Dbschema.updateOne({_id: dbId6}, {$set:{"Asset.status": online6, "Asset.name": name6, "Asset.errors": error6}})

                    await Dbschema.updateOne({_id: dbId6}, {$push:{"Asset.data.fuelLevel": tankVolume6, "Asset.data.updated": isoDateTime}});
                } catch(err){
                    console.log('Db error on asset 6')
                }
        

        
        

        } catch(err){
            error6 = true;
            console.log('error fetching data on asset 6')
                            try{
                                await Dbschema.updateOne({_id: dbId6}, {$set:{"Asset.errors": error6}});

                            } catch(err){
                                console.log('Db error on error catch asset 6')
                            }
        }

} catch(err){ // END of Asset 6
online6 = false; 
console.log('Asset 6 Offline')
try{
await Dbschema.updateOne({_id: dbId6}, {$set:{"Asset.status": online6}});

} catch(err){
console.log('Db error asset 6')
}
}


    try{// Asset 7
        console.log('Inspecting Asset 7');
        await page.goto(loginlink7, {waitUntil: "domcontentloaded"});
    
        try{
            
            online7 = true; 
            await page.waitForSelector(userInputId);
            await page.type(userInputId, user, {delay: 50});
            await page.type(passInputId, pass, {delay: 50});
            console.log(`Loging as ${user}`)
            await page.click(loginbutton);
            await page.waitForNavigation();
            await page.goto(overviewLink7, {waitUntil: "domcontentloaded",});

            console.log('awaiting 3 seconds');
            await delay(3000);
            
            await page.waitForSelector(nameIdWeb);
            name7 = await page.$$eval(nameIdWeb, name7 => name7.map( name7 => name7.innerText));
            tankVolume7 = await page.$$eval(tankIdWeb, tankVolume7 => tankVolume7.map( tankVolume7 => tankVolume7.innerText));
                                    
                                    
            name7 = name7[0];
            tankVolume7 = tankVolume7[0].substr(22, 4); 
            console.log(`Asset 7 results are :`);
            console.log({name7, tankVolume7});
            

            //DATA VALIDATION:
            if(typeof name7 === 'undefined'){console.log('data 7 = undefined'); return(err);}
            if(typeof tankVolume7 === 'undefined'){console.log('tankVolume7 = undefined'); return(err);}
            tankVolume7 = Number(tankVolume7);
            if(tankVolume7 === 0){console.log('tankVolume7 = 0');} // to check if it is the wrong object strg to number returns 0

          

            //DataBase Insert Here
            dateTime();
            error7 = false; // to tell that there are no internal errors 
                    try{
                        await Dbschema.updateOne({_id: dbId7}, {$set:{"Asset.status": online7, "Asset.name": name7, "Asset.errors": error7}})

                        await Dbschema.updateOne({_id: dbId7}, {$push:{"Asset.data.fuelLevel": tankVolume7, "Asset.data.updated": isoDateTime}});
                    } catch(err){
                        console.log('Db error')
                    }
            

            
            

            } catch(err){
                error7 = true;
                console.log('error fetching data on asset 7')
                                try{
                                    await Dbschema.updateOne({_id: dbId7}, {$set:{"Asset.errors": error7}});

                                } catch(err){
                                    console.log('Db error on error catch asset 7')
                                }
            }

} catch(err){ // END of Asset 7
online7 = false; 
console.log('Asset 7 Offline')
try{
await Dbschema.updateOne({_id: dbId7}, {$set:{"Asset.status": online7}});

} catch(err){
console.log('Db error asset 7')
}
}

console.log('Asset from 8 until 14 are under construction');

try{//  Asset 15  H0156
    console.log('Inspecting Asset 15 H0156');
    await page.goto(loginlink15, {waitUntil: "domcontentloaded"});

    try{
        
        online15 = true; 
        await page.waitForSelector(userInputId);
        await page.type(userInputId, user, {delay: 50});
        await page.type(passInputId, pass, {delay: 50});
        console.log(`Loging as ${user}`)
        await page.click(loginbutton);
        await page.waitForNavigation();
        await page.goto(overviewLink15, {waitUntil: "domcontentloaded",});

        console.log('awaiting 3 seconds');
        await delay(3000);
        
        await page.waitForSelector(nameIdWeb);
        name15 = await page.$$eval(nameIdWeb, name15 => name15.map( name15 => name15.innerText));
        tankVolume15 = await page.$$eval(tankIdWeb, tankVolume15 => tankVolume15.map( tankVolume15 => tankVolume15.innerText));
                                
                                
        name15 = name15[0];
        tankVolume15 = tankVolume15[0].substr(22, 4); 
        console.log(`Asset 15 results are :`);
        console.log({name15, tankVolume15});
        

        //DATA VALIDATION:
        if(typeof name15 === 'undefined'){console.log('data 15 = undefined'); return(err);}
        if(typeof tankVolume15 === 'undefined'){console.log('tankVolume15 = undefined'); return(err);}
        tankVolume15 = Number(tankVolume15);
        if(tankVolume15 === 0){console.log('tankVolume15 = 0');} // to check if it is the wrong object strg to number returns 0

      

        //DataBase Insert Here
        dateTime();
        error15 = false; // to tell that there are no internal errors 
                try{
                    await Dbschema.updateOne({_id: dbId15}, {$set:{"Asset.status": online15, "Asset.name": name15, "Asset.errors": error15}})

                    await Dbschema.updateOne({_id: dbId15}, {$push:{"Asset.data.fuelLevel": tankVolume15, "Asset.data.updated": isoDateTime}});
                } catch(err){
                    console.log('Db error at asset 15')
                }
        

        
        

        } catch(err){
            error15 = true;
            console.log('error fetching data on asset 15')
                            try{
                                await Dbschema.updateOne({_id: dbId15}, {$set:{"Asset.errors": error15}});

                            } catch(err){
                                console.log('Db error on error catch asset 15')
                            }
        }

} catch(err){ // END of Asset 15
online15 = false; 
console.log('Asset 15 Offline')
try{
await Dbschema.updateOne({_id: dbId15}, {$set:{"Asset.status": online15}});

} catch(err){
console.log('Db error asset 15')
}
}

try{//  Asset 16  H0256 NEEDS CONTROLLER UPDATE
    console.log('Inspecting Asset 16 H0256 NEEDS CONTROLLER UPDATE');
    await page.goto(loginlink16, {waitUntil: "domcontentloaded"});

    try{
        
        online16 = true; 
        name16 = "H0256";
        dateTime();
        error16 = false; // to tell that there are no internal errors 
                try{
                    await Dbschema.updateOne({_id: dbId16}, {$set:{"Asset.status": online16, "Asset.name": name16, "Asset.errors": error16}})

                    await Dbschema.updateOne({_id: dbId16}, {$push:{"Asset.data.fuelLevel": tankVolume16, "Asset.data.updated": isoDateTime}});
                    console.log('Asset 16 results are:');
                    console.log({name16, online16});
                } catch(err){
                    console.log('Db error at asset 16')
                }

        } catch(err){
            error16 = true;
            console.log('error fetching data on asset 16')
                            try{
                                await Dbschema.updateOne({_id: dbId16}, {$set:{"Asset.errors": error16}});

                            } catch(err){
                                console.log('Db error on error catch asset 16')
                            }
        }

} catch(err){ // END of Asset 16
online16 = false; 
console.log('Asset 16 Offline')
try{
await Dbschema.updateOne({_id: dbId16}, {$set:{"Asset.status": online16}});

} catch(err){
console.log('Db error asset 16')
}
}


try{//  Asset 17  H0356 NEEDS CONTROLLER UPDATE
    console.log('Inspecting Asset 17 H0356 NEEDS CONTROLLER UPDATE');
    await page.goto(loginlink17, {waitUntil: "domcontentloaded"});

    try{
        
        online17 = true; 
        name17 = "H0356";
        dateTime();
        error17 = false; // to tell that there are no internal errors 
                try{
                    await Dbschema.updateOne({_id: dbId17}, {$set:{"Asset.status": online17, "Asset.name": name17, "Asset.errors": error17}})

                    await Dbschema.updateOne({_id: dbId17}, {$push:{"Asset.data.fuelLevel": tankVolume17, "Asset.data.updated": isoDateTime}});
                    console.log('Asset 17 results are:');
                    console.log({name17, online17});
                    
                } catch(err){
                    console.log('Db error at asset 17')
                }

        } catch(err){
            error17 = true;
            console.log('error fetching data on asset 17')
                            try{
                                await Dbschema.updateOne({_id: dbId17}, {$set:{"Asset.errors": error17}});

                            } catch(err){
                                console.log('Db error on error catch asset 17')
                            }
        }

} catch(err){ // END of Asset 17
online17 = false; 
console.log('Asset 17 Offline')
try{
await Dbschema.updateOne({_id: dbId17}, {$set:{"Asset.status": online17}});

} catch(err){
console.log('Db error asset 17')
}
}

try{// Asset 18 H0456
     
    console.log('Inspecting Asset 18 H0456');
    await page.goto(loginlink18, {waitUntil: "domcontentloaded"});
   
    try{
        
        online18 = true; 
        await page.waitForSelector(userInputId);
        await page.type(userInputId, user, {delay: 50});
        await page.type(passInputId, pass, {delay: 50});
        console.log(`Loging as ${user}`)
        await page.click(loginbutton);
        await page.waitForNavigation();
        await page.goto(overviewLink18, {waitUntil: "domcontentloaded",});

        console.log('awaiting 3 seconds');
        await delay(3000);
        
        await page.waitForSelector(nameIdWeb);
        name18 = await page.$$eval(nameIdWeb, name18 => name18.map( name18 => name18.innerText));
        tankVolume18 = await page.$$eval(tankIdWeb, tankVolume18 => tankVolume18.map( tankVolume18 => tankVolume18.innerText));
        
        
        name18 = name18[0];
        tankVolume18 = tankVolume18[0].substr(22, 4); 
        console.log(`Asset 18 results are :`);
        console.log({name18, tankVolume18});
        

        //DATA VALIDATION:
        if(typeof name18 === 'undefined'){console.log('data 18 = undefined'); return(err);}
        if(typeof tankVolume18 === 'undefined'){console.log('tankVolume18 = undefined'); return(err);}
        tankVolume18 = Number(tankVolume18);
        if(tankVolume18 === 0){console.log('tankVolume18 = 0');} // to check if it is the wrong object strg to number returns 0



        //DataBase Insert Here
        dateTime();
        error18 = false; // to tell that there are no internal errors 
                try{
                    await Dbschema.updateOne({_id: dbId18}, {$set:{"Asset.status": online18, "Asset.name": name18, "Asset.errors": error18}})

                    await Dbschema.updateOne({_id: dbId18}, {$push:{"Asset.data.fuelLevel": tankVolume18, "Asset.data.updated": isoDateTime}});
                    console.log({name18, tankVolume18, online18});
                } catch(err){
                    console.log('Db error asset 18')
                }
        

        
        

        } catch(err){
            error18 = true;
            console.log('error fetching data on asset 18')
                            try{
                                await Dbschema.updateOne({_id: dbId18}, {$set:{"Asset.errors": error18}});

                            } catch(err){
                                console.log('Db error on error catch asset 18')
                            }
        }

} catch(err){ // END of Asset 18
online18 = false; 
console.log('Asset 18 Offline')
try{
await Dbschema.updateOne({_id: dbId18}, {$set:{"Asset.status": online18}});

} catch(err){
console.log('Db error asset 18')
}
}

try{// Asset 19 H0756
     
    console.log('Inspecting Asset 19 H0756');
    await page.goto(loginlink19, {waitUntil: "domcontentloaded"});
   
    try{
        
        online19 = true; 
        await page.waitForSelector(userInputId);
        await page.type(userInputId, user, {delay: 50});
        await page.type(passInputId, pass, {delay: 50});
        console.log(`Loging as ${user}`)
        await page.click(loginbutton);
        await page.waitForNavigation();
        await page.goto(overviewLink19, {waitUntil: "domcontentloaded",});

        console.log('awaiting 3 seconds');
        await delay(3000);
        
        await page.waitForSelector(nameIdWeb);
        name19 = await page.$$eval(nameIdWeb, name19 => name19.map( name19 => name19.innerText));
        tankVolume19 = await page.$$eval(tankIdWeb, tankVolume19 => tankVolume19.map( tankVolume19 => tankVolume19.innerText));
        
        
        name19 = name19[0];
        tankVolume19 = tankVolume19[0].substr(22, 4); 
        console.log(`Asset 19 results are :`);
        
        

        //DATA VALIDATION:
        if(typeof name19 === 'undefined'){console.log('data 19 = undefined'); return(err);}
        if(typeof tankVolume19 === 'undefined'){console.log('tankVolume19 = undefined'); return(err);}
        tankVolume19 = Number(tankVolume19);
        if(tankVolume19 === 0){console.log('tankVolume19 = 0');} // to check if it is the wrong object strg to number returns 0
        if(isNaN(tankVolume19) == true){
            console.log(' tankVolume19 NaN');
            tankVolume19 = 0;
        }
        console.log({name19, tankVolume19, online19});



        //DataBase Insert Here
        dateTime();
        error19 = false; // to tell that there are no internal errors 
                try{
                    await Dbschema.updateOne({_id: dbId19}, {$set:{"Asset.status": online19, "Asset.name": name19, "Asset.errors": error19}})

                    await Dbschema.updateOne({_id: dbId19}, {$push:{"Asset.data.fuelLevel": tankVolume19, "Asset.data.updated": isoDateTime}});
                    console.log({name19, tankVolume19, online19});
                } catch(err){
                    console.log('Db error asset 19  oook');
                    console.log(err);
                }
        

        
        

        } catch(err){
            error19 = true;
            console.log('error fetching data on asset 19')
                            try{
                                await Dbschema.updateOne({_id: dbId19}, {$set:{"Asset.errors": error19}});

                            } catch(err){
                                console.log('Db error on error catch asset 19')
                            }
        }

} catch(err){ // END of Asset 19
online19 = false; 
console.log('Asset 19 Offline')
try{
await Dbschema.updateOne({_id: dbId19}, {$set:{"Asset.status": online19}});

} catch(err){
console.log('Db error asset 19 kjh')
console.log(err);
}
}



    await browser.close();
    return;
}



async function updatedChecker(){
    //online checker asset 1
    var checkAsset1 = await Dbschema.findById(dbId1).exec();
    var latestDate1 = checkAsset1.Asset.data.updated.slice(-1);
    if (latestDate1[0].getDate() != date.getDate()){
        console.log(`The Asset ${asset1} is not updated or offline`)
        online1 = false;
        await Dbschema.updateOne({_id: dbId1}, {$set:{"Asset.status": online1}});
    }

    //online checker asset 2
    var checkAsset2 = await Dbschema.findById(dbId2).exec();
    var latestDate2 = checkAsset2.Asset.data.updated.slice(-1);
    if (latestDate2[0].getDate() != date.getDate()){
        console.log(`The Asset ${asset2} is not updated or offline`)
        online2 = false;
        await Dbschema.updateOne({_id: dbId2}, {$set:{"Asset.status": online2}});
    }
}

async function fuelPrediction1(){
    try{
    console.log(`Calculating ${asset1} Fuel Prediction...`)
    var dbCallAsset = await Dbschema.findById(dbId1).exec();
    var dayBefore = dbCallAsset.Asset.data.fuelLevel.slice(-2);
    var today = dbCallAsset.Asset.data.fuelLevel.slice(-1);
    var dailyConsume = (dayBefore[0] - today[0]);

    if(dailyConsume < 0){
        fuelDaysRemaining1 = 'No Consuming';
        await Dbschema.updateOne({_id: dbId1}, {$set:{"Asset.fuelDaysRemaining": fuelDaysRemaining1}});
        console.log({fuelDaysRemaining1});
        //console.log(dayBefore[0], today[0], dailyConsume, 'first');

    }else if(dailyConsume > 0 && dailyConsume < 50){
        fuelDaysRemaining1 = 'No Consuming';
        console.log({fuelDaysRemaining1});
        await Dbschema.updateOne({_id: dbId1}, {$set:{"Asset.fuelDaysRemaining": fuelDaysRemaining1}});
        //console.log(dayBefore[0], today[0], dailyConsume, 'second');

    } else{
        fuelDaysRemaining1 = today[0] / dailyConsume;
        fuelDaysRemaining1 = fuelDaysRemaining1.toFixed(2);
        console.log({fuelDaysRemaining1});
        await Dbschema.updateOne({_id: dbId1}, {$set:{"Asset.fuelDaysRemaining": fuelDaysRemaining1}});
        //console.log(dayBefore[0], today[0], dailyConsume, 'thrid');
    }}
    catch(err){
        console.log("error at fuel prediction 1")
    }
}
async function fuelPrediction2(){
    try{
    console.log(`Calculating ${asset2} Fuel Prediction...`)
    var dbCallAsset = await Dbschema.findById(dbId2).exec();
    var dayBefore = dbCallAsset.Asset.data.fuelLevel.slice(-2);
    var today = dbCallAsset.Asset.data.fuelLevel.slice(-1);
    var dailyConsume = (dayBefore[0] - today[0]);

    if(dailyConsume < 0){
        fuelDaysRemaining2 = 'No Consuming';
        await Dbschema.updateOne({_id: dbId2}, {$set:{"Asset.fuelDaysRemaining": fuelDaysRemaining2}});
        console.log({fuelDaysRemaining2});
        //console.log(dayBefore[0], today[0], dailyConsume, 'first');

    }else if(dailyConsume > 0 && dailyConsume < 50){
        fuelDaysRemaining2 = 'No Consuming';
        console.log({fuelDaysRemaining2});
        await Dbschema.updateOne({_id: dbId2}, {$set:{"Asset.fuelDaysRemaining": fuelDaysRemaining2}});
        //console.log(dayBefore[0], today[0], dailyConsume, 'second');

    } else{
        fuelDaysRemaining2 = today[0] / dailyConsume;
        fuelDaysRemaining2 = fuelDaysRemaining2.toFixed(2);
        console.log({fuelDaysRemaining2});
        await Dbschema.updateOne({_id: dbId2}, {$set:{"Asset.fuelDaysRemaining": fuelDaysRemaining2}});
        //console.log(dayBefore[0], today[0], dailyConsume, 'thrid');
    }}
    catch(err){
        console.log("error at fuel prediction 2")
    }
}

// FUNCTIONS END




connectDB();

setInterval(scheduleReading, intervalTime);

//assetsReading();





/*
async function checkname(){
    var test3 = await Dbschema.findById(dbId2).exec(); //'Boiler H0513'
    console.log(test3.Asset.data.fuelLevel);
}*/








