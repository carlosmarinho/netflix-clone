import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import { magic } from '../lib/magic-client';
import { Magic } from 'magic-sdk';

import styles from '../styles/login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const isLoading = false;

  const router = useRouter();

  const handleOnChangeEmail = (e) => {
    setUserMsg('');
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    if (email) {
      if (email === 'carluizfla@hotmail.com') {
        try {
          console.log('\n\n***\n magic: ', email, '\n***\n');
          // await magic.auth.loginWithMagicLink({ email });
          // const didToken = await magic.auth.loginWithMagicLink({ email });
          // the Magic code
          const didToken = await new Magic(
            'pk_live_9E6B1B591581274D'
          ).auth.loginWithMagicLink({ email });
          console.log({ didToken });
          if (didToken) {
            router.push('/');
          }
        } catch (error) {
          //handle errors
          console.error('Something went wrong loggin in', error);
        }
      } else {
        setUserMsg('Something went wrong loggin in');
      }
    } else {
      // show user message
      setUserMsg('Enter a valid email address');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href='/'>
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src='/static/netflix.svg'
                  alt='Netflix logo'
                  width='128px'
                  height='34px'
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>

          <input
            type='text'
            placeholder='Email address'
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />

          <p className={styles.userMsg}>{userMsg}</p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
      </main>{' '}
    </div>
  );
};

export default Login;
