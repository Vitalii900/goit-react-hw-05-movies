import { ListItem } from '../CastList/CastList.styled';

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
  })
}