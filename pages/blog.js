import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Blog.module.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog - Hachi by tokyo</title>
        <link rel="icon" href="/head_icon.png" />
        {/*for seo purposes*/}
        <meta name="description" content="Dog grooming salon" />
      </Head>

      <div className={styles.landing}>
        <h1>Work in Progress...</h1>
      </div>
    </div>
  );
}
