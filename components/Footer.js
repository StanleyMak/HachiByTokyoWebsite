import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image
          src="/footer/logo.png"
          alt="Hachi by tokyo logo"
          width={200}
          height={100}
        />
        <div className={styles.contact}>
          <h1 style={{ fontSize: "2rem" }}>Contact Us</h1>
          <div style={{ fontSize: "1.25rem", lineHeight: "2.5" }}>
            <p>
              <a href="https://www.google.com/maps/place/Hachi+by+tokyo+-+Pet+Grooming+%26+More/@1.3106612,103.7887129,15z/data=!4m5!3m4!1s0x0:0xd6f896985e5a182d!8m2!3d1.3106612!4d103.7887129">
                21 Ghim Moh Road, #01-201, S 270021
              </a>
            </p>
            <p>
              Whatsapp:
              <a href="https://api.whatsapp.com/send/?phone=+65%2088696367&text=Hello!">
                {" "}
                8869 6367
              </a>
            </p>
            <p>
              Call:<a href="tel: 88696367"> 8869 6367</a>
            </p>
            <p>
              Email Us:
              <a href="mailto: hachi@hachibytokyo.com">
                {" "}
                hachi@hachibytokyo.com
              </a>
            </p>
          </div>
        </div>
        <Link
          href="https://booking.moego.pet/go/?name=HachibyTokyo&book=0"
          legacyBehavior
        >
          <a className={styles.button}>Book Now</a>
        </Link>
      </div>
      <div className={styles.btm}>
        <div className={styles.policy}>
          <Link href="https://google.com.sg" legacyBehavior>
            <a
              style={{
                fontSize: "0.75rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Terms & Conditions
            </a>
          </Link>
          <Link href="https://google.com.sg" legacyBehavior>
            <a
              style={{
                fontSize: "0.75rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Privacy Policy
            </a>
          </Link>
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
          <a
            style={{
              fontSize: "0.75rem",
              textDecoration: "none",
              color: "grey",
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
            2022,&nbsp;Hachi by tokyo
          </a>
        </Link>
      </div>
    </div>
  );
}
