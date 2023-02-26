import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../components/API';
import { SearchList } from '../components/SearchList';

export const Movies = () => {
  const [arrayOfMovie, setArrayOfMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const find = searchParams.get('find') ?? '';

  useEffect(() => {
    if (find === '') {
      return;
    }
    getSearchMovie(find).then(setArrayOfMovie);
  }, [find]);

  const inputValue = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams(
      form.elements.find.value !== '' ? { find: form.elements.find.value } : {}
    );
    form.reset();
  };

  const { results, total_results } = arrayOfMovie;

  return (
    <main>
      <form onSubmit={inputValue}>
        <label>
          <input name="find" type="text" />
        </label>
        <button type="submit">Search</button>
      </form>
      {total_results > 0 && <SearchList movies={results}></SearchList>}
      {total_results === 0 && <p>We don`t have a movie with this name</p>}
    </main>
  );
};