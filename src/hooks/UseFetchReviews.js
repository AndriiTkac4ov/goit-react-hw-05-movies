import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export const useFetchReviews = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        api.fetchMovieReviews(movieId).then(setCast).catch(console.error);
    }, [movieId])
    
    return cast;
}