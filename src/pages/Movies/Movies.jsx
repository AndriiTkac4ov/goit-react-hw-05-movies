import {
    MoviesSection,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput,
    MoviesList,
    MovieItem,
    MovieLink,
} from "./Movies.styled";
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Loader } from "../../components/Loader/Loader";
import { toast } from 'react-toastify';
import api from '../../services/api';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const query = searchParams.get("query");

    const location = useLocation();

    useEffect(() => {
        if (query === '') {
            return;
        };

        const getMovies = async () => {
            try {
                setIsLoading(true);

                let movies = await api.fetchMoviesBySearch(query);
                movies = movies.map(movie => {
                    return movie = {
                        id: movie.id,
                        title: movie.title,
                    }
                });
                setMovies(movies);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getMovies();
    }, [query])

    const handleSubmit = event => {
        event.preventDefault();

        // if (query.trim() === '') {
        //     toast.warn("Searchign form is empty! Please input some text.");
        //     return;
        // }

        const form = event.currentTarget;
        setSearchParams({ query: form.elements.query.value.toLowerCase() });
        form.reset();
    }

    return (
        <MoviesSection>
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <FaSearch size={32}/>
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                    type="text"
                    name="query"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
            </SearchForm>

            {isLoading && <Loader />}
            {!isLoading && movies?.length !== 0 &&
                <MoviesList>
                    {movies?.map(({ id, title}) => (
                        <MovieItem key={id}>
                            <MovieLink state={{from: location}} to={`${id}`}>
                                {title}
                            </MovieLink>
                        </MovieItem>
                    ))}
                </MoviesList>
            }
            
            {isError && toast.error("We have error.")}
        </MoviesSection>
    )
}
