import '../styles/globals.css'
import {Fragment} from "react";
import Layout from "../components/layout/layout.js";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </Fragment>)
}

export default MyApp
