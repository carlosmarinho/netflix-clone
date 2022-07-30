import videoData from '../data/videos.json';

export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = 'youtube.googleapis.com/youtube/v3';
    const response = await fetch(
      `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
    );

    console.log('\n\n***\n response ssr: ', response, '\n***\n');

    const data = await response.json();

    if (data?.error) {
      console.error('Youtube API error', data.error);
      return [];
    }
    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (error) {
    console.error('Something went wrong with library: ', error);
    return [];
  }
};

export const getVideos = (searchQuery) => {
  const URL = `search?part=snippet&type=video&q=${searchQuery}%20trailer`;

  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=BR';

  return getCommonVideos(URL);
};