import Card from './Card';

import styles from './section-cards.module.css';

const SectionCards = ({ title, videos, size }) => {
  console.log('\n\n***\n vodeps: ', videos, '\n***\n');
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          // eslint-disable-next-line react/jsx-key
          return <Card id={idx} imgUrl={video.imgUrl} size={size} />;
        })}
        <Card id={0} size={size} />
      </div>
    </section>
  );
};

export default SectionCards;
