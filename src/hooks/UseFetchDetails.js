import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export const useFetchDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        api.fetchMovieById(movieId).then(setMovie).catch(console.error);
    }, [movieId])
    
    return movie;
}