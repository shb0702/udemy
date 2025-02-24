// 200. 또 다른 루프 : while 루프

let count = 0;
while(count < 10 ){
    count++;
    console.log(count);
}


const SECRET = "BabyHippo";

let guess1 = prompt("enter the secret code ...");
while(guess1 !== SECRET){
    guess1 = prompt("enter the secret code ...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!!");

// 201. 정지/break 키워드
// 무한루프  
let input = prompt("Hey, say something");
while (true) { 
    input = prompt(input);
    if(input.toUpperCase() === "stop copying me") break;
}
console.log("OK YOU WIN!");


for(let i = 0; i < 100; i++){
    console.log(i);
    if (i === 100) break;
}













