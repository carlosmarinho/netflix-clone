import Card from './Card';

import styles from './section-cards.module.css';

const SectionCards = ({ title }) => {
  return (
    <section className={StyleSheet.container}>
      <h2 className={StyleSheet.title}>{title}</h2>
      <div className={StyleSheet.cardWrapper}>
        <Card imgUrl='/static/clifford.webp' size='large' />
      </div>
    </section>
  );
};

export default SectionCards;
