import axios from 'axios';

const moviesInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTczNWM0NWM0YzkzNDQ1NGI2MThkNGNjZDM5ZmIyMyIsIm5iZiI6MTcyOTU1NDkzMS4xNzY3NDEsInN1YiI6IjY3MTZlNGE4NjU0MThmMmI4NmJlYjVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5BTAqu3iZ0UAVFVlpgNuxuhbdQq8eSS7Il8EkrhlXuU',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await moviesInstance.get(
    '/trending/movie/day?language=en-US'
  );
  return data;
};

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTczNWM0NWM0YzkzNDQ1NGI2MThkNGNjZDM5ZmIyMyIsIm5iZiI6MTcyOTYyMDk3OC4wNTMzMjMsInN1YiI6IjY3MTZlNGE4NjU0MThmMmI4NmJlYjVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aPTbSe72v4YJ1HSdxCGsNyagzCYBkZQDNxolxnVnXg4' \
//      --header 'accept: application/json'

export const fetchMoviesBySearchValue = async () => {
  const { data } = await moviesInstance.get(`search/movie?query=Jack+Reacher`);
  return data;
};
// const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

// const options = {
//   headers: {
// 	// Замість api_read_access_token вставте свій токен
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTczNWM0NWM0YzkzNDQ1NGI2MThkNGNjZDM5ZmIyMyIsIm5iZiI6MTcyOTU1NDkzMS4xNzY3NDEsInN1YiI6IjY3MTZlNGE4NjU0MThmMmI4NmJlYjVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5BTAqu3iZ0UAVFVlpgNuxuhbdQq8eSS7Il8EkrhlXuU'
//   }
// };

// axios.get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
