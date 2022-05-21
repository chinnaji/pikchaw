import axios from "axios";

// unsplash query function
export async function searchUnsplash(page, query) {
  // search images on unsplash based on search query
  const getUnsplashSearchResults = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=20&client_id=${process.env.unsplashClient_id}`
  );

  //   format response  and rename
  const {
    data: { total_pages, results },
  } = getUnsplashSearchResults;
  const response = { total_pages, results };
  // console.log(response);

  return response;
}

// pixabay query function
export async function searchPixaBay(page, query) {
  // search images on pixabay based on search query
  const getUnsplashSearchResults = await axios.get(
    `https://pixabay.com/api/?key=${process.env.pixabay_api_key}&q=${query}&image_type=photo&page=${page}`
  );
  // pixabay maximum pages is 26
  const total_pages = 26;
  //   format response  and rename
  const {
    data: { hits: results },
  } = getUnsplashSearchResults;
  const response = { total_pages, results };
  // console.log(response);

  return response;
}

// pexels query function
export async function searchPexels(page, query) {
  // search images on pexel based on search query
  const getPexelsSearchResults = await axios.get(
    `https://api.pexels.com/v1/search?query=${query}&per_page=20&page=${page}`,
    {
      headers: {
        Authorization: process.env.pexels_api_key,
      },
    }
  );
  //   format response,
  // rename total_results to total_pages  for uniformity
  // rename photos to results  for uniformity
  const { data } = getPexelsSearchResults;
  const { total_results: total_pages, photos: results } = data;
  // const {
  //   data: { total_results: total_pages, photos: results },
  // } = getPexelsSearchResults;
  const response = { total_pages, results };

  //   return props object so page can use data
  return response;
}
