import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID xWN6-ouNyZqk78iSvIvx5IzSQC7FWj4vd4v62PDShpY',
    },
    params: {
      query: 'cars',
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
