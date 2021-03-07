export default function urlGenerator(url) {
  if (url !== null) return `http://image.tmdb.org/t/p/w200${url}`;
  return "";
}
