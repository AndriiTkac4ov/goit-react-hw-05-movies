import { useFetchCast } from '../../hooks/UseFetchCast';

export const Cast = () => {
    const cast = useFetchCast();
    const posterPathBase = 'https://image.tmdb.org/t/p/w500';

    return (
        <> {cast &&
            <ul>
                {cast.map(({ cast_id, character, name, profile_path }) => (
                    <li key={cast_id}>
                        <img src={posterPathBase + profile_path} alt={name} width={200}/>
                        <h4>{name}</h4>
                        <p>Character: {character}</p>
                    </li>
                ))}
            </ul>
        }</>
    )
}