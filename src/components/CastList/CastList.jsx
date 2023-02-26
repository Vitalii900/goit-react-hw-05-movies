import { ListItem } from '../CastList/CastList.styled';
import PropTypes from 'prop-types';

export const CastList = ({ actors }) => {
  const { cast } = actors;

  return cast.map(({ character, name, profile_path, id }) => {
    const imageURL = `https://www.themoviedb.org/t/p/w200/${profile_path}`;
    return (
      <ListItem key={id}>
        <img
          src={profile_path ? imageURL : 'http://placehold.it/200x300'}
          alt={name}
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </ListItem>
    );
  });
};

CastList.propTypes = {
  actors: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        character: PropTypes.string,
        name: PropTypes.string,
        profile_path: PropTypes.string,
        id: PropTypes.number,
      })
    ),
  }),
};
