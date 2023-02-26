import { Link, useLocation } from 'react-router-dom';

export const SearchList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id, release_date }) => {
        return (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title} ({release_date.slice(0, 4)})
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
