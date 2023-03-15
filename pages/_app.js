import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "@/services/provider";
export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Providers>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Providers>
    </>
  );
}
