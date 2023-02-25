import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../components/API';
import { ReviewList } from '../components/ReviewsList';

export const Reviews = () => {
  const { movieId } = useParams();
  const [aboutReviews, setAboutReviews] = useState([]);
  // console.log(aboutReviews);
  useEffect(() => {
    const reviewsById = async id => {
      const infoAboutReviews = await getReviews(id);
      setAboutReviews(infoAboutReviews);
      // console.log(infoAboutReviews);
    };
    reviewsById(movieId);
  }, [movieId]);

  const { results } = aboutReviews;

  return (
    <ul>
      {results && <ReviewList reviews={results}></ReviewList>}
    </ul>
  );
};
