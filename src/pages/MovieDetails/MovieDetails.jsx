import {
    DetailsSection,
    ButtonGoBack,
    PosterWrapper,
    DetailsWrapper,
    MovieTitle,
    OverviewTitle,
    OverviewText,
    AdditionalWrapper,
    AdditionalList,
    AdditionalItem,
    AdditionalLink,
} from './MovieDetails.styled';
import { useFetchDetails } from '../../hooks/UseFetchDetails';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from "../../components/Loader/Loader";

const MovieDetails = () => {
    const movie = useFetchDetails();
    const posterPathBase = 'https://image.tmdb.org/t/p/w500';

    const navigate = useNavigate();

    const location = useLocation();

    return (
        <>
            {movie &&
                <DetailsSection>
                    <ButtonGoBack type='button' onClick={()=>navigate(location?.state?.from ?? '/')}>Go back</ButtonGoBack>
                    <DetailsWrapper>
                        <PosterWrapper>
                            <img src={posterPathBase + movie.poster_path} alt={movie.title} width={320}/>
                        </PosterWrapper>
                        <div>
                            <MovieTitle>{movie.title} ({movie.release_date.slice(0, 4)})</MovieTitle>
                            <OverviewText>User scores: {Math.ceil(movie.vote_average*10)}%</OverviewText>
                            <OverviewTitle>Overview</OverviewTitle>
                            <OverviewText>{movie.overview}</OverviewText>
                            <OverviewTitle>Genres</OverviewTitle>
                            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                        </div>
                    </DetailsWrapper>
                    <AdditionalWrapper>
                        <OverviewTitle>Additional information</OverviewTitle>
                        <AdditionalList>
                            <AdditionalItem>
                                <AdditionalLink state={{ from: location.state?.from }} to='cast'>Cast</AdditionalLink>
                            </AdditionalItem>
                            <AdditionalItem>
                                <AdditionalLink state={{ from: location.state?.from }} to='reviews'>Reviews</AdditionalLink>
                            </AdditionalItem>
                        </AdditionalList>
                    </AdditionalWrapper>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </DetailsSection>
            }
        </>
    )
}

export default MovieDetails;