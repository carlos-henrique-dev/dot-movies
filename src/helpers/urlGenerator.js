export default function urlGenerator(url) {
  if (url !== null) return `https://image.tmdb.org/t/p/w200${url}`;
  return "";
}
