const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];




const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t){
    return t.toUpperCase();
})

texts;
caps;



const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const titles = movies.map(function (movie){
    return movie.title.toUpperCase();
})

/*
firstNames라는 이름의 변수를 정의하고 
이를 기존 배열인 fullNames을 map 메서드를 사용해 변환한 결과에 할당하여 
firstNames에 fullNames 배열에 있는 해리포터 등장인물의 이름(성을 제외한)만 포함되도록 하세요.
*/

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, 
                   {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

 const firstNames = fullNames.map(function (f){
    return f.first;
 })
 
 firstNames;







