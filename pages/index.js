import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
            <p style={{ margin: 0, marginBottom: 20 }}>
              Pet Grooming and Pet Care
            </p>
            <Link
              href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0"
              legacyBehavior
            >
              <a>Book Now</a>
            </Link>
          </div>

          <div className={styles.image_wrapper}>
            <Image src="/home/dog1.png" alt="Cute dog" fill />
          </div>
        </section>

        <section className={styles.reviews}>
          
        </section>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
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
