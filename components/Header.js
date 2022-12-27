import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Header.module.css";

export default function Header() {
  const toggleMobileMenu = () => {
    document.getElementById("menu").classList.toggle(styles.open);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <Image src="/header/logo.png" alt="Hachi by tokyo logo" fill />
        </Link>
      </div>

      <nav className={styles.navBar}>
        <Link href="/" legacyBehavior>
          <a className={styles.navItem}>Home</a>
        </Link>
        <Link href="/services" legacyBehavior>
          <a className={styles.navItem}>Services</a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a className={styles.navItem}>Blog</a>
        </Link>
        <Link
          href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0"
          legacyBehavior
        >
          <a className={styles.navItem}>Book Now</a>
        </Link>
      </nav>

      <div id="menu" className={styles.menuIcon} onClick={toggleMobileMenu}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
        <nav className={styles.mobileMenu}>
          <div className={styles.links}>
            <div>
              <Image
                src="/header/icons/home.png"
                alt="home icon"
                height={25}
                width={25}
              />
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </div>
            <div>
              <Image
                src="/header/icons/services.png"
                alt="services icon"
                height={25}
                width={25}
              />
              <Link href="/services" legacyBehavior>
                <a>Services</a>
              </Link>
            </div>
            <div>
              <Image
                src="/header/icons/blog.png"
                alt="blog icon"
                height={25}
                width={25}
              />
              <Link href="/blog" legacyBehavior>
                <a>Blog</a>
              </Link>
            </div>
            <div>
              <Image
                src="/header/icons/booknow.png"
                alt="book now icon"
                height={25}
                width={25}
              />
              <Link
                href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0"
                legacyBehavior
              >
                <a>Book Now</a>
              </Link>
            </div>
          </div>

          <div className={styles.socials}>
            <Link href="https://www.facebook.com/hachibytokyo/">
              <Image
                src="/footer/fb_logo.png"
                alt="Hachi by tokyo logo"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.instagram.com/hachibytokyo/?hl=en">
              <Image
                src="/footer/ig_logo.png"
                alt="Hachi by tokyo logo"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
