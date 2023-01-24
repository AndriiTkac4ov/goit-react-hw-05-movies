import { useFetchDetails } from '../../hooks/UseFetchDetails';

export const MovieDetails = () => {
    const movie = useFetchDetails();
    console.log(movie);

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