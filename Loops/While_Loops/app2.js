let maximum = parseInt(prompt("Enter the maximum number!"));

/*
    Math.random() 정적 메서드는 0보다 크거나 1보다 
    작은 부동 소수점 의사 난수를 반환하며, 
    해당 범위에서 거의 균일한 분포를 가지므로 원하는 범위로 
    확장할 수 있습니다. 
    구현체는 난수 생성 알고리즘의 초기 시드를 선택하며, 
    사용자가 선택하거나 재설정할 수 없습니다.

    floor 함수 : Math.floor() 정적 메서드는 언제나 버림 처리하고 
    주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
*/
while (!maximum){
    maximum = parseInt(prompt("Enter a vaild number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

