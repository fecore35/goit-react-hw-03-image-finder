const BASE_URL = "https://pixabay.com/api";
const API_KEY = "1030453-4271fa747ef92e686e2b519ac";

async function fetchImages(searchTerms) {
  const response = await fetch(
    `${BASE_URL}?q=${searchTerms}&page=1&key=${API_KEY}&orientation=horizontal&per_page=12`
  );
  return await response.json();
}

export default fetchImages;
