const subreddits = ['cringe','books', 'chickens','funny','pics','soccer','gunners'];


// 기존 for루프
for(let i = 0; i < subreddits.length; i++){
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

// For Of
for (let sub of subreddits){
    console.log(sub);
}


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
// 기존 for 루프
for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    for (let j = 0;  j < row.length; j++){
        console.log(row[j])
    }
}
// For Of
for (let row of seatingChart){
    for (let student of row){
        console.log(student)
    }
}


for(let char of "hello world"){
    console.log(char)
}

/*
 for...of를 사용하는 실습을 해 보겠습니다. 
 numbers라는 배열을 제공해 드렸습니다. 
 for...of루프를 사용하여 이 배열을 순회(loop over)하고 
 각 값의 제곱(숫자를 자기 자신으로 곱한 수)을 출력하세요.
*/
const numbers = [1,2,3,4,5,6,7,8,9];

for(let num of numbers){
    console.log(num * num)
}
















