import styles from './navbar.module.css';
const NavBar = (props) => {
  const { username } = props;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href='' className={styles.logoWrapper}>
          <div className={styles.logoWrapper}>Netflix</div>
        </a>
      </div>
      <p>{username}</p>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem2}>My List</li>
      </ul>
      <nav className={styles.navContainer}>
        <div>
          <button className={styles.usernameBtn}>
            <p className={styles.username}>{username}</p>
            {/* Expand more icon */}
          </button>
          <div className={styles.navDropdown}>
            <div>
              <a href='' className='styles.linkName'>
                Sign out
              </a>
              <div className='styles.lineWrapper'></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
