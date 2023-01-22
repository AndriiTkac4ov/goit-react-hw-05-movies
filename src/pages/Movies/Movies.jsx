import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import api from '../../services/api';
import { MoviesSection, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Movies.styled";
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);

    const searchMovie = searchParams.get("searchMovie");

    useEffect(() => {
        if (searchMovie === '') {
            return;
        };

        const getMovies = async () => {
            try {
                // setIsLoading(true);

                let movies = await api.fetchMovies(searchMovie);
                movies = movies.map(movie => {
                    return movie = {
                        id: movie.id,
                        title: movie.original_title,
                    }
                });
                setMovies(movies);
            } catch (error) {
                console.log(error);
                // setIsError(true);
            } finally {
                // setIsLoading(false);
            }
        }

        getMovies();
    }, [searchMovie])

    const handleSubmit = event => {
        event.preventDefault();

        if (searchMovie.trim() === '') {
            toast.warn("Searchign form is empty! Please input some text.");
            return;
        }

        const form = event.currentTarget;
        setSearchParams({ searchMovie: form.elements.searchMovie.value.toLowerCase() });
        // reset();
    }

    // const reset = () => {
    //     setMovies([])
    // }

    return (
        <MoviesSection>
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <FaSearch size={32}/>
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                    type="text"
                    name="searchMovie"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
            </SearchForm>

            {movies?.length !== 0 &&
            <ul>
                {movies?.map((movie) => (
                    <li key={movie.id}>Title = {movie.title}</li>
                ))}
            </ul>}
        </MoviesSection>
    )
}