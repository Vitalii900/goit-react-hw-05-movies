export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <p>{movie.title}</p>
          </li>
        );
      })}
    </ul>
  );
};
