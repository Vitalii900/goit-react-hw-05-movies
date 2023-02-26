import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from '../../components/API';
import { GenresList } from '../../components/GenresList/GenresList';
import {
  BackLinkButton,
  Image,
  ContentConteiner,
  AdditionalLink,
  AditionalContainer,
} from '../MovieDetails/MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [aboutMovie, setAboutMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setAboutMovie);
  }, [movieId]);

  const imageURL = `https://www.themoviedb.org/t/p/w500/${aboutMovie.poster_path}`;
  const { genres, poster_path, title, overview, release_date, vote_average } =
    aboutMovie;

  return (
    <main>
      <BackLinkButton to={location.state?.from ?? '/'}>Back</BackLinkButton>
      <ContentConteiner>
        <Image src={poster_path && imageURL} alt={title} />
        <div>
          <h2>
            {title} ({release_date && release_date.slice(0, 4)})
          </h2>
          <p>User score: {vote_average && vote_average.toFixed(1)}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          {genres?.length > 0 && <h3>Genres</h3>}
          {genres?.length > 0 && <GenresList genres={genres}></GenresList>}
        </div>
      </ContentConteiner>
      <AditionalContainer>
        <h3>Aditional information</h3>
        <AdditionalLink to="cast" state={{ from: location.state?.from }}>
          Cast
        </AdditionalLink>
        <AdditionalLink to="reviews" state={{ from: location.state?.from }}>
          Reviews
        </AdditionalLink>
      </AditionalContainer>
      <Outlet />
    </main>
  );
};
