import { useFetchReviews } from '../../hooks/UseFetchReviews';
import { formatReviewDate } from '../../utils/formatReviewDate';

export const Reviews = () => {
    const reviews = useFetchReviews();

    return (
        <> {reviews &&
            <ul>
                {reviews.map(({ id, author, updated_at, content }) => (
                    <li key={id}>
                        <h4>Author: {author}</h4>
                        <time dateTime={updated_at}>{formatReviewDate(updated_at)}</time>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        }</>
    )
}