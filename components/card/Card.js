import Image from 'next/image';
import { useState } from 'react';

import styles from './card.module.css';

const Card = ({ imgUrl = '/static/clifford.webp', size = 'medium' }) => {
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const [imageSrc, setImageSrc] = useState(imgUrl);
  const handleOnError = () => {
    console.log('Hi error!');
    setImageSrc('/static/clifford.webp');
  };

  return (
    <div className='styles.container'>
      Card
      <div className={classMap[size]}>
        <Image
          src={imageSrc}
          alt='image '
          layout='fill'
          onError={handleOnError}
          className={styles.cardImg}
        />
      </div>
    </div>
  );
};

export default Card;
