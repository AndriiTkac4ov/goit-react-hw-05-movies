import { useState } from "react";
import PropTypes from 'prop-types';
import { MoviesSection, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Movies.styled";
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const Movies = ({ onSubmitForApp }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleNameChange = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

    //     if (searchQuery.trim() === '') {
    //         toast.warn("Searchign form is empty! Please input some text.");
    //         return;
    //     }

    //     onSubmitForApp(searchQuery);
        reset();
    }

    const reset = () => {
        setSearchQuery('')
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
                    name="searchQuery"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={searchQuery}
                    onChange={handleNameChange}
                />
            </SearchForm>
        </MoviesSection>
    )
}

Movies.propTypes = {
    onSubmitForApp: PropTypes.func.isRequired,
}