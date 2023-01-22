import axios from 'axios';

const moviesAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});
const API_KEY = 'b2ca45879b59d6f3a6890d4088317ef8';

export const fetchMovies = async (searchQuery) => {
    const response = await moviesAPI.get('/search/movie/?', {
        params: {
            api_key: API_KEY,
            query: searchQuery,
        },
    });

    return response.data.results;
}

// export const fetchMovies = async () => {
//     const response = await moviesAPI.get('/trending/movie/day/?', {
//         params: {
//             api_key: API_KEY,
//         },
//     });

//     return response.data;
// }

const api = {
    fetchMovies,
}

export default api;