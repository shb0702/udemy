/*
// 중첩 루프
for(let i = 1; i <= 10; i++){
    // 10회 반복    
    console.log(`i is : ${i}`);
    for (let j = 1; j < 4; j++){
        // 30회 반복
        console.log(` j is : ${j}`);
    }
}
*/


// 하위 배열이 3개인 배열
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++){
    console.log(seatingChart[i])
}

