import { useRouter } from 'next/router';

const Video = () => {
  return <div>video page</div>;
  const router = useRouter();
  console.log({ router });
  return <div>video page {router.query.videoId}</div>;
};

export default Video;
