import { useFetchReviews } from '../../hooks/UseFetchReviews';

export const Reviews = () => {
    const reviews = useFetchReviews();
    console.log(reviews);

    return (
        <> {reviews &&
            <ul>
                {reviews.map(({ id, author, updated_at, content }) => (
                    <li key={id}>
                        <h5>Author: {author}</h5>
                        <time dateTime={updated_at}>{updated_at}</time>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        }</>
    )
}