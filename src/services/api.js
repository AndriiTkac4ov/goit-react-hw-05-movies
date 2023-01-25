import axios from 'axios';

const moviesAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});
const API_KEY = 'b2ca45879b59d6f3a6890d4088317ef8';

export const fetchMoviesByTrend = async () => {
    const response = await moviesAPI.get('/trending/movie/day?', {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data.results;
}

export const fetchMoviesBySearch = async (searchQuery) => {
    const response = await moviesAPI.get('/search/movie?', {
        params: {
            api_key: API_KEY,
            query: searchQuery,
        },
    });

    return response.data.results;
}

export const fetchMovieById = async (id) => {
    const response = await moviesAPI.get(`/movie/${id}?`, {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data;
}

export const fetchMovieCast = async (id) => {
    const response = await moviesAPI.get(`/movie/${id}/credits?`, {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data.cast;
}

export const fetchMovieReviews = async (id) => {
    const response = await moviesAPI.get(`/movie/${id}/reviews?`, {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data;
}

const api = {
    fetchMoviesByTrend,
    fetchMoviesBySearch,
    fetchMovieById,
    fetchMovieCast,
    fetchMovieReviews,
}

export default api;