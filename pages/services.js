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

      <section className={styles.services}>
        <div className={styles.header}>
          <h1 style={{ fontSize: "3rem" }}>Our Services</h1>
          <h2 style={{ fontSize: "1.3rem" }}>Dogs | Cats | Rabbits</h2>
          <p style={{ lineHeight: "1.5" }}>
            HACHI by tokyo strives to provide your pets with the utmost love &
            care. <br />
            We believe that our beloved pets deserve a safe & happy grooming
            experience.
            <br />
            Providing both you and your pet a trustworthy, welcoming and premier
            pet service.
            <br />
            Dedicated, detailed and careful.
          </p>
          <p style={{ lineHeight: "1.5" }}>
            Ensuring satisfaction for both you and your pet, book an appointment
            with HACHI by tokyo today!
            <br />
            Singapore | Tokyo
          </p>
        </div>
      </section>

      <section>
        <h1>More stuff!</h1>
      </section>
    </div>
  );
}
