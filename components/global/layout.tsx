import { CssBaseline } from "@mui/material";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <div>{children}</div>
      <footer>
        Made by Bogdan Neterebskii
      </footer>
    </>
  );
}
