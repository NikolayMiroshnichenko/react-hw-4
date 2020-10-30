const TRENDING_URL =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=bd5960dfa7bf787da5977c3087926718";
const PRIMARY_URL = "https://api.themoviedb.org/3/movie/";
const KEY_API = "?api_key=bd5960dfa7bf787da5977c3087926718&language=en-US";
const SEACH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=bd5960dfa7bf787da5977c3087926718&language=en-US&query=";

export const fetchTrending = () =>
  fetch(TRENDING_URL).then((responce) => responce.json());

export const fetchPrimary = (id) =>
  fetch(PRIMARY_URL + id + KEY_API).then((responce) => responce.json());

export const searchMovies = (query) =>
  fetch(SEACH_URL + query).then((responce) => responce.json());

export const fetchCredits = (id) =>
  fetch(
    "https://api.themoviedb.org/3/movie/" + id + "/credits" + KEY_API
  ).then((responce) => responce.json());

export const fetchReviews = (id) =>
  fetch(
    "https://api.themoviedb.org/3/movie/" + id + "/reviews" + KEY_API
  ).then((responce) => responce.json());
