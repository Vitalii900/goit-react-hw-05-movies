import { useEffect, useState } from 'react';
import { trendingMovies } from '../components/API';
import { MoviesList } from '../components/MoviesList/MoviesList';

const Home = () => {
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
      <h2>Trending today</h2>
      <MoviesList movies={arrayOfMovie}></MoviesList>
    </main>
  );
};

export default Home;