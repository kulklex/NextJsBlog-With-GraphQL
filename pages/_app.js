import '../styles/globals.css'
import Outlet from "../components/Outlet"

function MyApp({ Component, pageProps }) {
  return <Outlet>
    <Component {...pageProps} />
  </Outlet>
}

export default MyApp
