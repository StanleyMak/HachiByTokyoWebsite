import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hachi by tokyo</title>
        <link rel="icon" href="/head_icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <style>
          {" "}
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');{" "}
        </style>
      </Head>

      <header>
        <Link href="/">
          <Image
            src="/header/logo.png"
            alt="Hachi by tokyo logo"
            width={200}
            height={100}
          />
        </Link>
        <nav className={styles.nav_bar}>
          <Link href="/" legacyBehavior>
            <a className={styles.nav_item}>Home</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className={styles.nav_item}>Services</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className={styles.nav_item}>Blog</a>
          </Link>
          <Link
            href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0"
            legacyBehavior
          >
            <a className={styles.nav_item}>Book Now</a>
          </Link>
        </nav>
      </header>

      <main>

      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        header {
          display: flex;
          justify-content: space-evenly;
          align-items: flex-end;
          padding-top: 3rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0b150;
        }
        footer {
          width: 100%;
          height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          background-color: #fff6e8;
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
          font-family: Roboto, sans-serif;
          font-weight: 100;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
