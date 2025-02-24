/* 이제 첫 번째 함수를 작성할 차례입니다.
문자열 "<3"을 출력하는 printHeart라는 함수를 정의하세요.
함수를 한 번 실행하세요. */

function printHeart(){
    console.log("<3");
}
printHeart();



function singsong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
} 

 function greet(firstName){
    console.log(`firstName is : ${firstName}`)
    // greet('name') : firstName is : name
}


function repeat(str, numTimes){
    let result = "";
    for (let i = 0; i < numTimes; i++){
        result += str;
    }
    console.log(result);
}


/*
    sSnakeEyes라는 함수를 작성하세요. 두 숫자가 모두 1이면 "Snake Eyes!"를 출력하고, 
    그렇지 않으면 "Not Snake Eyes!"를 출력하세요.

    isSnakeEyes(1,5) //Not Snake Eyes!
    isSnakeEyes(1,1) //Snake Eyes!
    isSnakeEyes(4,5) //Not Snake Eyes
*/
function isSnakeEyes(die1 , die2){

    if(die1 === 1 && die2 === 1){
        console.log("Snake Eyes!")
    }else {
        console.log("Not Snake Eyes!")
    }

}


function add (x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    let sum = x + y;
    return sum; 
}


/*
    대문자 변환 연습
    문자열 인수를 받아 첫 글자가 대문자로 된(문자열의 나머지 글자는 변경되지 않은) 새 문자열을 반환하는 capitalize 라는 이름의 함수를 정의하세요.
예:
    capitalize('eggplant') // "Eggplant"
    capitalize('pamplemousse') // "Pamplemousse"
    capitalize('squid') //"Squid"
힌트:
문자열은 불변이므로 원본 문자열의 첫 글자만 변경할 수는 없다는 점을 기억하세요. 반환할 새 문자열을 만들어야 합니다.
첫 글자를 골라 대문자로 변환하세요. (문자열 메서드를 사용하면 도움이 됩니다!)
원본 문자열에서 원래의 첫 글자가 생략되도록 잘라낸 나머지 부분에 해당 첫 글자를 추가하세요. (문자열 메서드를 사용하면 도움이 됩니다!)
    예: 'eggplant'는 'E' + 'ggplant'가 됩니다.
*/

function capitalize (str){
    return str[0].toUpperCase() + str.slice(1);
}

/*
    숫자 배열을 단일 인수로 받는 'sumArray'라는 함수를 작성하세요. 이 함수는 배열에 있는 모든 숫자의 합을 반환해야 합니다.
    sumArray([1,2,3]) // 6
    sumArray([2,2,2,2]) // 8
    sumArray([50,50,1]) // 101
힌트:
    총계를 추적하려면 변수가 필요하며 변수는 0으로 시작해야 합니다.
    배열의 각 요소를 순회하면서 각 요소의 값을 총계 변수에 더하세요.
    모든 숫자를 총계에 더한 후에는 총계를 반환하세요.
*/

function sumArray(arrNum){
    
    let arr = 0;
        
    for(let i = 0; i < arrNum.length; i++){
        arr += arrNum[i];
    }
        return arr;
    
    
}





