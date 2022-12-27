import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hachi by tokyo</title>
        <link rel="icon" href="/head_icon.png" />
        {/*for seo purposes*/}
        <meta name="description" content="Dog grooming salon" />
      </Head>

      <main>
        <section className={styles.box}>
          <div className={styles.content}>
            <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Pet Grooming and Pet Care
            </p>
            <Link
              href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0"
              legacyBehavior
            >
              <a>Book Now</a>
            </Link>
          </div>

          <div className={styles.imageWrapper}>
            <Image src="/home/dog1.png" alt="Cute dog" fill />
          </div>
        </section>

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

          <div className={styles.top}>
            <div className={styles.card}>
              <Image
                src="/home/dog1.png"
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
                src="/home/dog1.png"
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
                src="/home/dog1.png"
                alt="Cute dog"
                height={100}
                width={100}
              />
              <div className={styles.text}>
                <h1>Bath and Fluff</h1>
                <p>A lovely Bath and Fluff for your Fur-kid 🐶🐱🐰 !</p>
              </div>
            </div>
          </div>

          <div className={styles.details}>
            <Link href="/services" legacyBehavior>
              <a>View Detailed Rates</a>
            </Link>
          </div>

          <div className={styles.btm}>
            <div className={styles.card}>
              <Image
                src="/home/dog1.png"
                alt="Cute dog"
                height={100}
                width={100}
              />
              <div className={styles.text}>
                <h1>Add-ons</h1>
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
                src="/home/dog1.png"
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

          <div className={styles.details}>
            <Link href="/services" legacyBehavior>
              <a>View Detailed Rates</a>
            </Link>
          </div>
        </section>

        <section className={styles.reviews}>
          <h1>- google reviews! -</h1>
        </section>
      </main>

      <style jsx>{`
        main {
          margin: 0;
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
