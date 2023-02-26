import { useLocation } from 'react-router-dom';
import { List, ListLink, ListItem } from './MoviesList.styled.jsx';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, release_date }) => {
        return (
          <ListItem key={id}>
            <ListLink to={`movies/${id}`} state={{ from: location }}>
              {title} ({release_date.slice(0, 4)})
            </ListLink>
          </ListItem>
        );
      })}
    </List>
  );
};
