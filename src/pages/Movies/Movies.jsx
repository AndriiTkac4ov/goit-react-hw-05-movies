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
import { toast } from 'react-toastify';
import api from '../../services/api';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isError, setIsError] = useState(false);

    const query = searchParams.get("query") ?? "";

    const location = useLocation();

    useEffect(() => {
        if (query === '') {
            return;
        };

        const getMovies = async () => {
            try {
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
            }
        }

        getMovies();
    }, [query])

    const handleSubmit = event => {
        event.preventDefault();
        
        const form = event.currentTarget;
        setSearchParams({ query: form.elements.query.value.toLowerCase() });

        if (query.trim() === '') {
            toast.warn("Searchign form is empty! Please input some text.");
            return;
        }

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

            {movies?.length !== 0 &&
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

export default Movies;