import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../API';
import { CastList } from '../CastList/CastList';
import { List } from '../Cast/Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [aboutCast, setAboutCast] = useState([]);
  // console.log(movieId);
  useEffect(() => {
    getCast(movieId).then(setAboutCast);
  }, [movieId]);

  return (
    <List>
      {aboutCast.length !== 0 && <CastList actors={aboutCast}></CastList>}
    </List>
  );
};
