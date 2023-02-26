import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../components/API';
import { CastList } from '../components/CastList';

export const Cast = () => {
  const { movieId } = useParams();
  const [aboutCast, setAboutCast] = useState([]);
  // console.log(movieId);
  useEffect(() => {
    getCast(movieId).then(setAboutCast);
  }, [movieId]);

  return (
    <ul>
      {aboutCast.length !== 0 && <CastList actors={aboutCast}></CastList>}
    </ul>
  );
};
