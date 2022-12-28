import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Script from "next/script.js";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Montserrat } from "@next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Header />
      <FloatingWhatsApp
        avatar="/head_icon.png"
        accountName="Hachi by tokyo"
        phoneNumber="+65 88696367"
        statusMessage="Typically replies within a day"
        chatMessage="Book an appointment now!!"
        allowClickAway
      />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
