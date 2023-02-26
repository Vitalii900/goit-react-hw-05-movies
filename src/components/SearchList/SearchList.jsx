import { useLocation } from 'react-router-dom';
import { List, ListItem, ListLink } from '../SearchList/SearchList.styled';
import PropTypes from 'prop-types';

export const SearchList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ title, id, release_date }) => {
        return (
          <ListItem key={id}>
            <ListLink to={`${id}`} state={{ from: location }}>
              {title} ({release_date.slice(0, 4)})
            </ListLink>
          </ListItem>
        );
      })}
    </List>
  );
};

SearchList.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      release_date: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};
