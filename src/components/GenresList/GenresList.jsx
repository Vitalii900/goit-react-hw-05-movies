import { List } from '../GenresList/GenresList.styled';
import PropTypes from 'prop-types';

export const GenresList = ({ genres }) => {
  return (
    <List>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </List>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
      }))
};