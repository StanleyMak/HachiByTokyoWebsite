import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.top}>
          <Image
            src="/footer/logo.png"
            alt="Hachi by tokyo logo"
            width={160}
            height={80}
          />
          <div className={styles.contact}>
            <h1>Contact Us</h1>
            <p>21 Ghim Moh Road, #01-201, S 270021</p>
            <p>Whatsapp: 88696367</p>
            <p>Call: 88696367</p>
            <p>Email Us: hachi@hachibytokyo.com</p>
          </div>
          <Link
            href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0"
            legacyBehavior
          >
            <a>Book Now</a>
          </Link>
        </div>
        <div className={styles.btm}>
          <div className={styles.policy}>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            {/* <Link href="https://website!!!" legacyBehavior>
              <a style={{ textDecoration: "none", color: "black" }}>Terms & Conditions</a>
            </Link>
            <Link href="https://website!!!" legacyBehavior>
              <a style={{ textDecoration: "none", color: "black" }}>Privacy Policy</a>
            </Link> */}
          </div>
          <div className={styles.socials}>
            <Link href="https://www.facebook.com/hachibytokyo/">
              <Image
                src="/footer/fb_logo.png"
                alt="Hachi by tokyo logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://www.instagram.com/hachibytokyo/?hl=en">
              <Image
                src="/footer/ig_logo.png"
                alt="Hachi by tokyo logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className={styles.copyright}>
          <Link href="/" legacyBehavior>
            <a style={{ textDecoration: "none", color: "grey" }}>
              <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
              2022,&nbsp;Hachi by tokyo
            </a>
          </Link>
        </div>
    </div>
  );
}
