// 함수 내에서 함수를 값으로 반환하는 법
function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
     }else {
            return function(){
                alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
                alert("STOP TRYING TO CLOSE THIS WINDOW!")
                alert("STOP TRYING TO CLOSE THIS WINDOW!")
                alert("STOP TRYING TO CLOSE THIS WINDOW!")
                alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }  
    }
} 


function isBetwwen(num){
    return num >= 50 && num <= 100
}

function isBetween2(num){
    return num >= 1 && num <= 10
}


function callTwice(func){
    func();
    func();
}


function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)





















