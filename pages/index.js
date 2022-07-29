import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner/Banner';
import NavBar from '../components/nav/navbar';
import Card from '../components/card/Card';
import SectionCards from '../components/card/SectionCards';

export default function Home() {
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
        <SectionCards title='Disney' />
      </div>

      {/* <Card imgUrl='/static/clifford.webp' size='small' /> */}
    </div>
  );
}
