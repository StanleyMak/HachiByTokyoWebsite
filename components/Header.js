import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
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
    </div>
  );
}
