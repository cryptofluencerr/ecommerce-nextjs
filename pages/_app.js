import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </StoreProvider>
  );
}

export default MyApp;
