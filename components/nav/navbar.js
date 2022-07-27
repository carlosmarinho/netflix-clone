import Link from 'next/link';
import { useRouter } from 'next/router';
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
          <div className={styles.logoWrapper}>Netflix</div>
        </a>
        <p>{username}</p>
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
