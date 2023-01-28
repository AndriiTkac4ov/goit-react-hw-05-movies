import {
    TrendMoviesSection,
    TrendSectionTitle,
    TrendMoviesList,
    TrendMovieItem,
    TrendMovieLink
} from "./Home.styled";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from '../../services/api';

const Home = () => {
    const [moviesInTrend, setMoviesInTrend] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getMoviesInTrend = async () => {
            try {
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
            }
        }

        getMoviesInTrend();
    }, [])

    return (
        <TrendMoviesSection>
            <TrendSectionTitle>Trending today</TrendSectionTitle>
            {moviesInTrend?.length !== 0 &&
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

export default Home;