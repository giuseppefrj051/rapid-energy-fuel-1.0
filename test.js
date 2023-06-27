var cosa = "Current Tank Volume : 7282 L";

console.log(cosa);// Current Tank Volume : 7282 L

try{
    cosa = cosa.substring(22, 26);

    console.log(cosa);
}
catch(err){
    console.log(`grabriela tenemos problemas`);
    //console.log(err);
}