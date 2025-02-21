/* try{
    hello.toUpperCase();
}catch{
    console.log("ERROR!!!!");
}
 
console.log("AFTER!")
 */


function yell(msg){
    try{
       console.log(msg.toUpperCase().repeat(3));
    } catch (e){
        /*
            TypeError: msg.toUpperCase is not a function
            at yell (app.js:13:24)
            at <anonymous>:1:1
        */
        console.log(e);
        //console.log("Please pass a string next time!");
    }
        
}