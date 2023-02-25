import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../components/API';
import { CastList } from '../components/CastList';

export const Cast = () => {
  const { movieId } = useParams();
  const [aboutCast, setAboutCast] = useState([]);
  // console.log(movieId);
  useEffect(() => {
    const castById = async id => {
      const infoAboutCast = await getCast(id);
      setAboutCast(infoAboutCast);
      // console.log(infoAboutCast);
    };
    castById(movieId);
  }, [movieId]);

  return (
    <ul>
      {aboutCast.length !== 0 && <CastList actors={aboutCast}></CastList>}
    </ul>
  );
};
