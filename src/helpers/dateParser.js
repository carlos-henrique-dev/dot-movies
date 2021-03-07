export default function dateParser(rawDate) {
  return new Date(rawDate).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
