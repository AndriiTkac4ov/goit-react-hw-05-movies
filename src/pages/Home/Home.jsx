import { MoviesTrendSection, SectionTitle } from "./Home.styled";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import api from '../../services/api';

export const Home = () => {
    const [moviesInTrend, setMoviesInTrend] = useState();
    const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getMoviesInTrend = async () => {
            try {
                setIsLoading(true);

                let moviesInTrend = await api.fetchMoviesByTrend();
                moviesInTrend = moviesInTrend.map(movie => {
                    return movie = {
                        id: movie.id,
                        title: movie.original_title,
                    }
                });
                setMoviesInTrend(moviesInTrend);
            } catch (error) {
                console.log(error);
                // setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getMoviesInTrend();
    }, [])

    return (
        <MoviesTrendSection>
            <SectionTitle>Trending today</SectionTitle>
            {isLoading && <Loader />}
            {!isLoading && moviesInTrend?.length !== 0 &&
            <ul>
                {moviesInTrend?.map(({ id, title}) => (
                    <li key={id}>
                        <Link to={id}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>}
        </MoviesTrendSection>
    )
}
