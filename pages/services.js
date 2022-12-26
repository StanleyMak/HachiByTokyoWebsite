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
        <section className={styles.services}>
          <div className={styles.header}>
            <h1 style={{ fontSize: "3rem" }}>Our Services</h1>
            <h2 style={{ fontSize: "1.5rem" }}>Dogs | Cats | Rabbits</h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </section>
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
