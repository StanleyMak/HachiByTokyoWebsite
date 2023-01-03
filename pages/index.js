import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hachi by tokyo</title>
        <link rel="icon" href="/head_icon.png" />
        {/*for seo purposes*/}
        <meta name="description" content="Dog grooming salon" />
      </Head>

      <section className={styles.landing}>
        <div
          className={styles.content}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
            Pet Grooming and Pet Care
          </h2>
          <Link
            href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0"
            legacyBehavior
          >
            <a>Book Now</a>
          </Link>
        </div>

        <div
          className={styles.imageWrapper}
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image src="/home/dog1.png" alt="Cute dog" fill />
        </div>
      </section>

      <section className={styles.services}>
        <div
          className={styles.header}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
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

        <div className={styles.top} data-aos="fade-up">
          <div className={styles.card}>
            <Image
              src="/home/full_grooming.png"
              alt="Cute dog"
              height={100}
              width={100}
            />
            <div className={styles.text}>
              <h1>Full Grooming</h1>
              <p>1. Bath & Blow Dry</p>
              <p>2. Nail Trimming</p>
              <p>3. Paw Pad Shaving</p>
              <p>4. Shaving of Sanitary and Belly area</p>
              <p>5. Ear Cleaning</p>
              <p>6. Style & Trim</p>
              <p>7. Anal Gland Expression (optional)</p>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/home/basic_grooming.png"
              alt="Cute dog"
              height={100}
              width={100}
            />
            <div className={styles.text}>
              <h1>Basic Grooming</h1>
              <p>1. Bath & Blow Dry</p>
              <p>2. Nail Trimming</p>
              <p>3. Paw Pad Shaving</p>
              <p>4. Shaving of Sanitary and Belly area</p>
              <p>5. Ear Cleaning</p>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/home/bath_and_fluff.png"
              alt="Cute dog"
              height={100}
              width={100}
            />
            <div className={styles.text}>
              <h1>Bath and Fluff</h1>
              <p>A lovely Bath and Fluff for your Fur-kid!</p>
              <p>*only for dogs</p>
            </div>
          </div>
        </div>

        <Link href="/services" legacyBehavior>
          <a>View Detailed Rates</a>
        </Link>

        <div className={styles.btm} data-aos="fade-up">
          <div className={styles.card}>
            <Image
              src="/home/ala_carte.png"
              alt="Cute dog"
              height={100}
              width={100}
            />
            <div className={styles.text}>
              <h1>Ala Carte Services</h1>
              <p>Herbal Spa</p>
              <p>Tooth Brushing</p>
              <p>Dental Scaling</p>
              <p>Nail Clipping</p>
              <p>Ear Cleaning</p>
              <p>Paw Pad Shaving</p>
              <p>Anal Gland Expression</p>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/home/boarding.png"
              alt="Cute dog"
              height={100}
              width={100}
            />
            <div className={styles.text}>
              <h1>Boarding</h1>
              <p>Whole day boarding</p>
              <p>Half day boarding (4 hours)</p>
            </div>
          </div>
        </div>

        <Link href="/services" legacyBehavior>
          <a>View Detailed Rates</a>
        </Link>
      </section>

      <section className={styles.reviews} data-aos="fade-up">
        <h1>- google reviews! -</h1>
      </section>
    </div>
  );
}
