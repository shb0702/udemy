
// 시작. 무엇을 원하는지?
let input = prompt('what would you like to do?')
// 첫 시작 List 기본값
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// input 값이 quit 나 q로 입력되면 종료
while (input !== 'quit' && input !== 'q'){
// input 값이 list 면 
    if (input === 'list'){
        console.log('*****************')
        // todos의 길이만큼 반복적으로 증가하는만큼 list를 보여준다.
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
        // input 값이 new일 경우
    }else if(input === 'new'){
        // list에 어떤 새로운 내용을 추가할 것인지?
        const newTodo = prompt('OK, what is the new todo?');
        // 입력된 내용을 push (추가) 함.
        todos.push(newTodo);
        // 추가한 내용을 보여줌
        console.log(`${newTodo} added to the list!`);
        // input 값이 delete일 경우
    }else if(input === 'delete'){
        // 삭제하고 싶은 index 번호를 입력하세요. 추가로 index 번호가 아닌 문자열이 입력될 경우 형변환
        const index = parseInt(prompt('OK, enter an index to delete :'));
        // index 번호가 문자열이나 숫자가 아닌 값으로 들어온게 아니라면
        if(!Number.isNaN(index)){
            // list에서 입력된 index 번호를 splice
            const deleted = todos.splice(index, 1);
            console.log(`OK, deleted ${deleted[0]}`); 
        }else {
            // index 번호가 숫자가 아닌 다른값이라면 
            console.log('Unknown index');
        }
    }
    // 사용자의 의도를 반복적으로 질문
    input = prompt('what would you like to do?')
}
// 종료
console.log('Ok quit the app!')