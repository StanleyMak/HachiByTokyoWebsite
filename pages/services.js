import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Services.module.css";

export default function Services() {
  /* dogs */
  const openSmallDog = () => {
    document.getElementById("dogListSmall").classList.toggle(styles.show);
    document.getElementById("dogBtnSmall").classList.toggle(styles.opened);
  };
  const openMediumDog = () => {
    document.getElementById("dogListMedium").classList.toggle(styles.show);
    document.getElementById("dogBtnMedium").classList.toggle(styles.opened);
  };
  const openLargeDog = () => {
    document.getElementById("dogListLarge").classList.toggle(styles.show);
    document.getElementById("dogBtnLarge").classList.toggle(styles.opened);
  };
  const openGiantDog = () => {
    document.getElementById("dogListGiant").classList.toggle(styles.show);
    document.getElementById("dogBtnGiant").classList.toggle(styles.opened);
  };

  /* cats */
  const openShortCat = () => {
    document.getElementById("catListShort").classList.toggle(styles.show);
    document.getElementById("catBtnShort").classList.toggle(styles.opened);
  };
  const openMediumCat = () => {
    document.getElementById("catListMedium").classList.toggle(styles.show);
    document.getElementById("catBtnMedium").classList.toggle(styles.opened);
  };
  const openLongCat = () => {
    document.getElementById("catListLong").classList.toggle(styles.show);
    document.getElementById("catBtnLong").classList.toggle(styles.opened);
  };

  /* rabbits */
  const openShortRabbit = () => {
    document.getElementById("rabbitListShort").classList.toggle(styles.show);
    document.getElementById("rabbitBtnShort").classList.toggle(styles.opened);
  };
  const openMediumRabbit = () => {
    document.getElementById("rabbitListMedium").classList.toggle(styles.show);
    document.getElementById("rabbitBtnMedium").classList.toggle(styles.opened);
  };
  const openLongRabbit = () => {
    document.getElementById("rabbitListLong").classList.toggle(styles.show);
    document.getElementById("rabbitBtnLong").classList.toggle(styles.opened);
  };

  const openDogPriceList = () => {
    document.getElementById("dogPriceList").magnificPopup({type:'image'});
  };

  // // Close the dropdown menu if the user clicks outside of it
  // window.onclick = function (event) {
  //   if (!event.target.matches(".dropbtn")) {
  //     var dropdowns = document.getElementsByClassName(styles.dropdown);
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains("show")) {
  //         openDropdown.classList.remove("show");
  //       }
  //     }
  //   }
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>Services - Hachi by tokyo</title>
        <link rel="icon" href="/head_icon.png" />
        {/*for seo purposes*/}
        <meta name="description" content="Dog grooming salon" />
      </Head>

      <section className={styles.landing}>
        <div className={styles.header} data-aos="fade-up">
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

        <div className={styles.cards} data-aos="fade-up">
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
              <p>*only for dogs</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pets}>
        <div className={styles.pet} data-aos="fade-up">
          <h1 style={{ alignSelf: "center" }}>Dogs</h1>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Image src="/home/dog1.png" alt="Cute dog" fill />
            </div>
            <div className={styles.sizes}>
              <div className={styles.dropdown}>
                <a id="dogBtnSmall" onClick={openSmallDog}>
                  Small
                </a>
                <div id="dogListSmall" className={styles.list}>
                  <p>Basic Grooming $60</p>
                  <p>Full Grooming $100</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Bath and Fluff $45
                  </p>
                </div>
              </div>
              <div className={styles.dropdown}>
                <a id="dogBtnMedium" onClick={openMediumDog}>
                  Medium
                </a>
                <div id="dogListMedium" className={styles.list}>
                  <p>Basic Grooming $75</p>
                  <p>Full Grooming $100 - $130</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Bath and Fluff $55
                  </p>
                </div>
              </div>
              <div className={styles.dropdown}>
                <a id="dogBtnLarge" onClick={openLargeDog}>
                  Large
                </a>
                <div id="dogListLarge" className={styles.list}>
                  <p>Basic Grooming $85</p>
                  <p>Full Grooming $120 - $150</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Bath and Fluff $60
                  </p>
                </div>
              </div>
              <div className={styles.dropdown}>
                <a id="dogBtnGiant" onClick={openGiantDog}>
                  Giant
                </a>
                <div id="dogListGiant" className={styles.list}>
                  <p>Basic Grooming $100 - $110</p>
                  <p>Full Grooming $150 - $180</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Bath and Fluff $65
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          id="dogPriceList"
          onClick={openDogPriceList}
          href="https://moegonew.s3-us-west-2.amazonaws.com/Public/Uploads/1665583146778e9343dfa44ebdbdda51aebf22576c.png"
        >
          View Price List
        </a>

        <div className={styles.pet} data-aos="fade-up">
          <h1 style={{ alignSelf: "center" }}>Cats</h1>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Image src="/home/dog1.png" alt="Cute dog" fill />
            </div>
            <div className={styles.sizes}>
              <div className={styles.dropdown}>
                <a id="catBtnShort" onClick={openShortCat}>
                  Short Coated
                </a>
                <div id="catListShort" className={styles.list}>
                  <p>Basic Grooming $60</p>
                  <p>Full Grooming $140</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Full Grooming + Shave $160
                  </p>
                </div>
              </div>
              <div className={styles.dropdown}>
                <a id="catBtnMedium" onClick={openMediumCat}>
                  Medium Coated
                </a>
                <div id="catListMedium" className={styles.list}>
                  <p>Basic Grooming $100</p>
                  <p>Full Grooming $150</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Full Grooming + Shave $160
                  </p>
                </div>
              </div>
              <div className={styles.dropdown}>
                <a id="catBtnLong" onClick={openLongCat}>
                  Long Coated
                </a>
                <div id="catListLong" className={styles.list}>
                  <p>Basic Grooming $110</p>
                  <p>Full Grooming $160</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Full Grooming + Shave $160
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pet} data-aos="fade-up">
          <h1 style={{ alignSelf: "center" }}>Rabbits</h1>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Image src="/home/dog1.png" alt="Cute dog" fill />
            </div>
            <div className={styles.sizes}>
              <div className={styles.dropdown}>
                <a id="rabbitBtnShort" onClick={openShortRabbit}>
                  Short Coated
                </a>
                <div id="rabbitListShort" className={styles.list}>
                  <p>Basic Grooming $40</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Full Grooming $60
                  </p>
                </div>
              </div>
              <div className={styles.dropdown}>
                <a id="rabbitBtnMedium" onClick={openMediumRabbit}>
                  Medium Coated
                </a>
                <div id="rabbitListMedium" className={styles.list}>
                  <p>Basic Grooming $45</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Full Grooming $65
                  </p>
                </div>
              </div>
              <div className={styles.dropdown}>
                <a id="rabbitBtnLong" onClick={openLongRabbit}>
                  Long Coated
                </a>
                <div id="rabbitListLong" className={styles.list}>
                  <p>Basic Grooming $50</p>
                  <p
                    style={{
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Full Grooming $70
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className={styles.btm} data-aos="fade-up">
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
        </div> */}
    </div>
  );
}
