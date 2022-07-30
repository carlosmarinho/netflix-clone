import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner/Banner';
import NavBar from '../components/nav/navbar';
import Card from '../components/card/Card';
import SectionCards from '../components/card/SectionCards';
import { getVideos } from '../lib/videos';

export async function getServerSideProps() {
  const disneyVideos = await getVideos('disney trailer');
  const ProductivityVideos = await getVideos('productivity');
  const travelVideos = await getVideos('travel');
  // const popularVideos = await getVideos();

  return { props: { disneyVideos, ProductivityVideos, travelVideos } };
}

export default function Home({
  disneyVideos,
  ProductivityVideos,
  travelVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar username='ankita@ank.com' />
      <Banner
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
        <SectionCards title='Popular' videos={disneyVideos} size='small' />
      </div>

      {/* <Card imgUrl='/static/clifford.webp' size='small' /> */}
    </div>
  );
}
