import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import React, { useEffect } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  
  /* add/remove "open" class (open/close mobile menu) */
  const toggleMobileMenu = () => {
    document.getElementById("menu").classList.toggle(styles.open);
  };

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;

    /* Get the header element and it's position */
    var headerDiv = document.getElementById("header");
    var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      /* if we're scrolling up, fix the nav to the top */
      if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
        headerDiv.classList.add(styles.fixedToTop);
      } else {
        /* otherwise if scrolling down, let it scroll out of view as normal */
        headerDiv.classList.remove(styles.fixedToTop);

        /* close mobile menu if it's open */
        var mobileMenu = document.getElementById("menu");
        if (mobileMenu.classList.contains(styles.open)) {
          mobileMenu.classList.remove(styles.open);
        }
      }

      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div id="header" className={`${styles.header} ${styles.fixedToTop}`}>
      <div id="menu" className={styles.menuIcon} onClick={toggleMobileMenu}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
        <nav className={styles.mobileMenu}>
          <div className={styles.links}>
            <div>
              <Image
                src="/header/home.png"
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
                src="/header/services.png"
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
                src="/header/blog.png"
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
                src="/header/booknow.png"
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

      <div className={styles.logoWrapper}>
        <Link href="/">
          <Image src="/header/logo.png" alt="Hachi by tokyo logo" fill />
        </Link>
      </div>

      <div className={styles.search}>
        <Image
          src="/header/search.png"
          alt="search icon"
          height={25}
          width={25}
        />
      </div>

      <nav className={styles.navBar}>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/services" legacyBehavior>
          <a>Services</a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a>Blog</a>
        </Link>
        <Link
          href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0"
          legacyBehavior
        >
          <a>Book Now</a>
        </Link>
      </nav>
    </div>
  );
}
