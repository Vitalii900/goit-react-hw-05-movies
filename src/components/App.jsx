import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
// import { Container, NavItem, Header } from './App.styled';

export const App = () => {
  return (
    // <Container>
    // <Header>
    //   <nav>
    //     <NavItem to="/" end>
    //       Home
    //     </NavItem>
    //     <NavItem to="/movies">Movies</NavItem>
    //   </nav>
    // </Header>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // </Container>
  );
};
