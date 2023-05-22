import axios from 'axios';
const BASE_URL = 'https://pixabay.com/';
const API_KEY = '34862797-4eb1005b10021e74ba901079d';

export default async function pixabayApi(q) {
  try {
    const response =
      await axios.get(`${BASE_URL}api/?q=${q}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
    
    `);

    return await response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
