import { useEffect, useState } from 'react';
import { trendingMovies } from '../components/API';
import { MoviesList } from '../components/MoviesList';

export const Home = () => {
  const [arrayOfMovie, setArrayOfMovie] = useState([]);

  useEffect(() => {
    const addResponseToState = async () => {
      const {results} = await trendingMovies();
      setArrayOfMovie(results);
    };
    addResponseToState();
  }, [])

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={arrayOfMovie}></MoviesList>
    </main>
  );
};
