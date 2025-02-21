// 고차 함수란 : 다른 함수와 함께 작동하거나 또는 
// 다른 함수에서 작동하는 함수를 고급스럽게 표현



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















