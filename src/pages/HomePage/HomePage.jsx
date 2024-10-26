import MovieList from '../../components/MovieList/MovieList';
import Section from '../../components/Section/Section';

const HomePage = () => {
  return (
    <Section title={'Tranding today'}>
      <MovieList />
    </Section>
  );
};

export default HomePage;
