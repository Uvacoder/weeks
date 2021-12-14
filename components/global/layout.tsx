import { CssBaseline } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDayJS";
import Head from "next/head";
import { LocalizationProvider } from "@mui/lab";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <CssBaseline />
          <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
          </Head>
          <div>{children}</div>
          <footer>Made by Bogdan Neterebskii</footer>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}
