import { List } from '../GenresList/GenresList.styled';

export const GenresList = ({ genres }) => {
  return (
    <List>
      {genres.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </List>
  );
};