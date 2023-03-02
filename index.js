const axios = require('axios');
const KEY = 'd771b19ef336ed8381def3a60b574464';

const discoverMovie = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}`;
    return axios(url);
};

const getMovieById = id => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`;
    return axios(url).then(res => res.data, err => err.response.status);
};

module.exports = {
    discoverMovie,
    getMovieById
};
