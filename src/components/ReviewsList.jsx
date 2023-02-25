export const ReviewList = ({ reviews }) => {
  // console.log(reviews);

  return reviews.map(({ author, content, id }) => {
    return (
      <li key={id}>
        <p>Author: {author}</p>
        <p>{content}</p>
      </li>
    );
  });
};
