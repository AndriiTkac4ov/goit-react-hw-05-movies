import {
    TrendMoviesSection,
    TrendSectionTitle,
    TrendMoviesList,
    TrendMovieItem,
    TrendMovieLink
} from "./Home.styled";
import { useState, useEffect } from "react";
import { Loader } from "../../components/Loader/Loader";
import { toast } from 'react-toastify';
import api from '../../services/api';

export const Home = () => {
    const [moviesInTrend, setMoviesInTrend] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getMoviesInTrend = async () => {
            try {
                setIsLoading(true);

                let moviesInTrend = await api.fetchMoviesByTrend();
                moviesInTrend = moviesInTrend.map(movie => {
                    return movie = {
                        id: movie.id,
                        title: movie.title,
                    }
                });
                setMoviesInTrend(moviesInTrend);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getMoviesInTrend();
    }, [])

    return (
        <TrendMoviesSection>
            <TrendSectionTitle>Trending today</TrendSectionTitle>
            {isLoading && <Loader />}
            {!isLoading && moviesInTrend?.length !== 0 &&
                <TrendMoviesList>
                    {moviesInTrend?.map(({ id, title}) => (
                        <TrendMovieItem key={id}>
                            <TrendMovieLink to={`movies/${id}`}>
                                {title}
                            </TrendMovieLink>
                        </TrendMovieItem>
                    ))}
                </TrendMoviesList>
            }
            
            {isError && toast.error("We have error.")}
        </TrendMoviesSection>
    )
}
