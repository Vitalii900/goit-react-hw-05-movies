import axios from 'axios';

export async function trendingMovies() {
  const KEY = '197007a676a4d3e84c6bdb6f21b18a1a';
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&page=1`
    );
    const arrayOfMovies = response.data;
    return arrayOfMovies;
  } catch (error) {
    console.error(error);
  }
}