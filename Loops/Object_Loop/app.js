const testScores = {
    keenan: 80,
    damon: 67,
    kim: 91,
    shawn: 72,
    marlon: 77,
    dwayne: 83,
    nadia: 97,
    elvira: 81,
    vonnie: 60
}

/*
for (let person in testScores){
    console.log(`${person} scored ${testScores[person]}`);
}
*/

let total = 0; 
let scores = Object.values(testScores)
for (let score of scores){
    total += score;
}
console.log(total / scores.length);


/*
    returnDay라는 이름의 함수를 작성하세요. 
    이 함수는 한 개의 매개변수(1~7 사이의 숫자)를 받아 요일을 반환합니다(1은 월요일, 2는 화요일 등). 
    숫자가 1보다 작거나 7보다 크면 함수는 null을 반환해야 합니다. 
    일부 국가에서는 일요일을 한 주의 첫째 날로 취급하지만, 이 연습에서는 월요일을 첫째 날로 사용하겠습니다.
*/

function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
      return null;
    } else {
      return days[num - 1];
    }
  }
  
