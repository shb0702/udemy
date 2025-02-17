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





