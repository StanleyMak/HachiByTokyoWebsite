import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hachi by tokyo</title>
        <link rel="icon" href="/head_icon.png" />
      </Head>

      <header>
        <div className={styles.header}>
          <Image src="/header/logo.png" alt="Hachi by tokyo logo" width={200} height={100} />
          <nav className={styles.nav_bar}>
            <Link href="/" legacyBehavior><a className={styles.nav_item}>Home</a></Link>
            <Link href="/services" legacyBehavior><a className={styles.nav_item}>Services</a></Link>
            <Link href="/blog" legacyBehavior><a className={styles.nav_item}>Blog</a></Link>
            <Link href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0" legacyBehavior><a className={styles.nav_item}>Book Now</a></Link>
          </nav>
        </div>
      </header>

      <hr></hr>

      <main>
        <div className={styles.box}>
          
          <div className={styles.content}>
            <p style={{ margin: 0, marginBottom: 20 }}>Pet Grooming and Pet Care</p>
            <Link href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0" legacyBehavior><a className={styles.button}>Book Now</a></Link>
          </div>
          <div className={styles.image_wrapper}>
            <Image src="/home/dog1.png" alt="Cute dog" fill/>
          </div>
        </div>
      </main>

      <footer>
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2022, Hachi by tokyo
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}