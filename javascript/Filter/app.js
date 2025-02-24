const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

numbers.filter (n =>{
    return n === 4  
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2013
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2004
    },
    {
        title: 'Alien',
        score: 90,
        year: 1986
    }
]



const goodMovies = movies.filter(m => m.score > 80)

movies.filter(m => m.score > 80).map(m => m.title);

const badMovies = movies.filter(m => m.score < 70)
const recentMovies = movies.filter(m => m.year > 2000)
