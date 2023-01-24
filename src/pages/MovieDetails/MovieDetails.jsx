import { useFetchDetails } from '../../hooks/UseFetchDetails';
// import { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';

export const MovieDetails = () => {
    // const [movie, setMovie] = useState(null);
    // const { movieId } = useParams();

    const movie = useFetchDetails();
    console.log(movie);

    // useEffect(() => {
    //     const getMoviesInTrend = async () => {
    //         try {
    //             // setIsLoading(true);

    //             let movie = await api.fetchMovieById(Number(movieId));
                
    //             setMovie(movie);
    //         } catch (error) {
    //             console.log(error);
    //             // setIsError(true);
    //         } finally {
    //             // setIsLoading(false);
    //         }
    //     }

    //     getMoviesInTrend();
    // }, [movieId])

    return (
        <> {movie &&
            <div>
                <img src={movie.poster_path} alt={movie.title} />
                <h3>{movie.original_title}</h3>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                {/* <p>{movie.genre_ids}</p> */}
            </div>
        }</>
    )
}