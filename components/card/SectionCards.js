import Link from 'next/link';
import Card from './Card';

import styles from './section-cards.module.css';

const SectionCards = ({ title, videos = [], size }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          console.log({ video });
          return (
            <Link key={idx} href={`/video/${video.id}`}>
              <Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />
            </Link>
          );
        })}
        <Card id={0} size={size} />
      </div>
    </section>
  );
};

export default SectionCards;
