import { useFetchReviews } from '../../hooks/UseFetchReviews';
import { formatReviewDate } from '../../utils/formatReviewDate';

export const Reviews = () => {
    const reviews = useFetchReviews();

    return (
        <> {reviews &&
            <ul>
                {reviews.map(({ id, author, updated_at, content }) => (
                    <li key={id}>
                        <h5>Author: {author}</h5>
                        <time dateTime={updated_at}>{formatReviewDate(updated_at)}</time>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        }</>
    )
}