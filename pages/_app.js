import CssBaseline from "@mui/material/CssBaseline";

import "../styles/global.css";
import Layout from "../components/global/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
