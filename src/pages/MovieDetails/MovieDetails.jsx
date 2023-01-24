import { useFetchDetails } from '../../hooks/UseFetchDetails';
import { NavLink } from 'react-router-dom';

export const MovieDetails = () => {
    const movie = useFetchDetails();
    const posterPathBase = 'https://image.tmdb.org/t/p/w500';

    return (
        <> {movie &&
            <section>
                <button type='button'>Go back</button>
                <div>
                    <img src={posterPathBase + movie.poster_path} alt={movie.title} width={400}/>
                    <h3>{movie.original_title} ({movie.release_date.slice(0, 4)})</h3>
                    <p>User scores: {Math.ceil(movie.vote_average*10)}%</p>
                    <h4>Overview</h4>
                    <p>{movie.overview}</p>
                    <h4>Genres</h4>
                    <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                </div>
                <div>
                    <h4>Additional information</h4>
                    <ul>
                        <li><NavLink to='/cast'>Cast</NavLink></li>
                        <li><NavLink to='/reviews'>Reviews</NavLink></li>
                    </ul>
                </div>
            </section>
        }</>
    )
}
