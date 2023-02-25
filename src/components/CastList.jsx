export const CastList = ({ actors }) => {
  // console.log(actors);
  const { cast } = actors;

  return cast.map(({ character, name, profile_path, id }) => {
    const imageURL = `https://www.themoviedb.org/t/p/w200/${profile_path}`;
    return (
      <li key={id}>
        <img
          src={profile_path ? imageURL : 'http://placehold.it/200x200'}
          alt={name}
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    );
  })
}