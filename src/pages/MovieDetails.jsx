import { useEffect, useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { getMovieById } from '../components/API';
import { GenresList } from '../components/GenresList';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [aboutMovie, setAboutMovie] = useState([]);

  useEffect(() => {
    const movieById = async id => {
      const infoAboutMovie = await getMovieById(id);
      setAboutMovie(infoAboutMovie);
      // console.log(infoAboutMovie);
    };
    movieById(movieId);
  }, [movieId]);

  const imageURL = `https://www.themoviedb.org/t/p/w500/${aboutMovie.backdrop_path}`;
  const { genres, backdrop_path, title, overview, release_date } = aboutMovie;

  return (
    <main>
      <img src={backdrop_path && imageURL} alt={title} />
      <div>
        <h2>
          {title}
          <span>({release_date && release_date.slice(0, 4)})</span>
        </h2>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && <GenresList genres={genres}></GenresList>}
      </div>
      <div>
        <p>Aditional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </main>
  );
};
