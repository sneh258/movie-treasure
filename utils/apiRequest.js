const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const ID = process.env.ACCOUNT_ID;

export const getTrendingMovies = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export const getMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await res.json();
  return data.results;
}

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
}

export const getSimilarMovies = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export const getFavouriteMovies = async (id) => {
  const res = await fetch(`${BASE_URL}/account/${ID}/favorite?api_key=${API_KEY}`, {
    method: 'POST',
    // headers: {
    //   accept: 'application/json',
    //   'content-type': 'application/json',
    //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTc4OGU3OGEzNDgzNGM4MTlmYzU2ZDUxZTE4YWFhNSIsInN1YiI6IjY0ZThhNGNkMWZlYWMxMDBjNDZlNTRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOPy45d7rDaWjJvf-noN0gNNSti9CWXV8b2fwqWSWMY'
    // },
  });
  const data = await res.json();
  return data.results;
}

