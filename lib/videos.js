import videoData from '../data/videos.json';

export const getVideos = async (searchQuery) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${searchQuery}%20trailer&key=${YOUTUBE_API_KEY}`
    );

    console.log('\n\n***\n response ssr: ', response, '\n***\n');

    const data = await response.json();
    return data?.items.map((item) => {
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: item?.id?.videoId,
      };
    });
  } catch (error) {
    console.error('Something went wrong with library: ', error);
  }
};
