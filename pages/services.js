import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Services - Hachi by tokyo</title>
        <link rel="icon" href="/head_icon.png" />
        {/*for seo purposes*/}
        <meta name="description" content="Dog grooming salon" />
      </Head>

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
      `}</style>
    </div>
  );
}
