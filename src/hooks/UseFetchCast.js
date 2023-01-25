import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export const useFetchCast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        api.fetchMovieCast(movieId).then(setCast).catch(console.error);
    }, [movieId])
    
    return cast;
}