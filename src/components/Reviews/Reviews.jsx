import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../API';
import { ReviewList } from '../ReviewsList';
import { List } from '../Reviews/Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [aboutReviews, setAboutReviews] = useState([]);
  useEffect(() => {
    getReviews(movieId).then(setAboutReviews);
  }, [movieId]);

  const { results, total_pages } = aboutReviews;

  return (
    <List>
      {total_pages ? (
        <ReviewList reviews={results}></ReviewList>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </List>
  );
};
