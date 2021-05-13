import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json?quality=3D"

export const getMovies = (limit, rating) => {
    fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
}

export let movies = [
    {
        id: 0,
        name: "super",
        score: 1,
        
    },
    {
        id: 1,
        name: "spider",
        score: 99,
        
    },
    {
        id: 2,
        name: "iron",
        score: 2,
        
    },
];

export const getById = id => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}