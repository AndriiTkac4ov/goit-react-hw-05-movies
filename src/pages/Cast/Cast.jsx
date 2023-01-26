import {
    CastList,
    CastName,
    CastCharacter,
} from './Cast.styled';
import imageNotFound from './image-not-found.jpeg';
import { useFetchCast } from '../../hooks/UseFetchCast';

export const Cast = () => {
    const cast = useFetchCast();
    const posterPathBase = 'https://image.tmdb.org/t/p/w500';

    return (
        <> {cast &&
            <CastList>
                {cast.map(({ cast_id, character, name, profile_path }) => (
                    <li key={cast_id}>
                        {profile_path ? (<img src={posterPathBase + profile_path} alt={name} width={150}/>) : (<img src={imageNotFound} alt='Not found' width={150} height={225}/>)}
                        <CastName>{name}</CastName>
                        <CastCharacter>Character:<br />{character}</CastCharacter>
                    </li>
                ))}
            </CastList>
        }</>
    )
}