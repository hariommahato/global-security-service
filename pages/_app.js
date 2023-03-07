import Header from '@/components/Header/Header';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
  </> 
}
