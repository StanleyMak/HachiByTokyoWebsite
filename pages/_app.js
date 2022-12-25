import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}