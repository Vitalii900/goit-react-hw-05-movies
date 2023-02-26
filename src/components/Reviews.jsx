import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../components/API';
import { ReviewList } from '../components/ReviewsList';

export const Reviews = () => {
  const { movieId } = useParams();
  const [aboutReviews, setAboutReviews] = useState([]);
  console.log(aboutReviews);
  useEffect(() => {
    getReviews(movieId).then(setAboutReviews);
  }, [movieId]);

  // if (!aboutReviews) {
  //   return null;
  // }

  const { results, total_pages } = aboutReviews;

  return (
    <ul>
      {total_pages ? (
        <ReviewList reviews={results}></ReviewList>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </ul>
  );
};
