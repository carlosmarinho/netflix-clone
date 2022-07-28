import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './navbar.module.css';

const NavBar = (props) => {
  const { username } = props;

  const [showDropDown, setshowDropDown] = useState(false);

  const router = useRouter();

  const handleOnclicHome = (e) => {
    e.preventDefault();
    router.push('/');
  };

  const handleOnclicMyList = (e) => {
    e.preventDefault();
    router.push('/browse/my-list');
  };

  const handleShowDropdown = (e) => {
    e.preventDefault();
    setshowDropDown(!showDropDown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href='' className={styles.logoWrapper}>
          <div className={styles.logoWrapper}>
            <Image
              src={'/static/netflix.svg'}
              alt='Netflix logo'
              width='128px'
              height='34px'
            />
          </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnclicHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnclicMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              {/**Expand more icon */}
              <Image
                src={'/static/expand_more.svg'}
                alt='Expand dropdown'
                width='24px'
                height='24px'
              />
            </button>
            {showDropDown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href={'/login'}>
                    <a className={styles.linkName}>Sign out</a>
                  </Link>
                  <div className='styles.lineWrapper'></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
