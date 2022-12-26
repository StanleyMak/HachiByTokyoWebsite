import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
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
    </>
  );
}
