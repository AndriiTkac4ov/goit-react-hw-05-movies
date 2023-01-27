import {
    ReviewsList,
    ReviewItem,
    ReviewAuthor,
    ReviewData,
    ReviewText,
} from './Reviews.styled';
import { useFetchReviews } from '../../hooks/UseFetchReviews';
import { formatReviewDate } from '../../utils/formatReviewDate';

export const Reviews = () => {
    const reviews = useFetchReviews();

    return (
        <>
            {reviews?.length === 0 && <p>Sorry, there are not any reviews.</p>}
            {reviews &&
                <ReviewsList>
                    {reviews.map(({ id, author, updated_at, content }) => (
                        <ReviewItem key={id}>
                            <ReviewAuthor>Author: {author}</ReviewAuthor>
                            <ReviewData dateTime={updated_at}>{formatReviewDate(updated_at)}</ReviewData>
                            <ReviewText>{content}</ReviewText>
                        </ReviewItem>
                    ))}
                </ReviewsList>
            }
        </>
    )
}
