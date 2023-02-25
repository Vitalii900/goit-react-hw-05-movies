import axios from 'axios';

const KEY = '197007a676a4d3e84c6bdb6f21b18a1a';

export async function trendingMovies() {
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

export async function getMovieById(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
    );
    const movieDetail = response.data;
    return movieDetail;
  } catch (error) {
    console.error(error);
  }
}

export async function getCast(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    const castDetail = response.data;
    return castDetail;
  } catch (error) {
    console.error(error);
  }
}

export async function getReviews(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    const reviewsDetail = response.data;
    return reviewsDetail;
  } catch (error) {
    console.error(error);
  }
}