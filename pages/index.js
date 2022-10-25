import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner/Banner';
import NavBar from '../components/nav/navbar';
import Card from '../components/card/Card';
import SectionCards from '../components/card/SectionCards';
import { getPopularVideos, getVideos } from '../lib/videos';
import { magic } from '../lib/magic-client';

export async function getServerSideProps() {
  const disneyVideos = await getVideos('disney trailer');
  const ProductivityVideos = await getVideos('productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, ProductivityVideos, travelVideos, popularVideos },
  };
}

export default function Home({
  disneyVideos,
  ProductivityVideos,
  travelVideos,
  popularVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='styles.main'>
        <NavBar />
        <Banner
          videoId='4zH5iYM4wJo'
          title='Clifford the red dog'
          subTitle='a very cute dog'
          imgUrl='/static/clifford.webp'
        />

        <div className='styles.sectionWrapper'>
          <SectionCards title='Disney' videos={disneyVideos} size='large' />
          <SectionCards title='Travel' videos={travelVideos} size='small' />
          <SectionCards
            title='Productivity'
            videos={ProductivityVideos}
            size='medium'
          />
          <SectionCards title='Popular' videos={popularVideos} size='small' />
        </div>

        {/* <Card imgUrl='/static/clifford.webp' size='small' /> */}
      </div>
    </div>
  );
}
