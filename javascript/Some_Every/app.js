const exams = [80,98,92,78,77,90,89,84,81,77];

exams.every(score => score >= 75)

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2016
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


movies.some(movie => movie.year > 2015)




