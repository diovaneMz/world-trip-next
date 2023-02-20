// IMPORTANT: THIS SITE WAS PROGRAMED USING (14PX === 1REM)

import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Header } from "@/components/Header";

import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";

const theme = extendTheme({
  styles: {
    global: {
      ".wrapper": {
        maxWidth: "102.8571rem",
        marginLeft: "auto",
        marginRight: "auto",
      },
      ':root': {
        '--swiper-navigation-color': 'yellow',
        '--swiper-pagination-color': 'yellow'
      }
    },
  },
  colors: {
    my: {
      darkText: "#47585B",
      darkInfo: "#999999",
      darkInfo50: "#99999980",
      lightInfo: "#DADADA",
      ligthText: "#F5F8FA",
      highlight: "#FFBA08",
      highlight50: "#FFBA0880",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    text: `'Poppins', sans-serif`,
  },
  breakpoints: {
    lg: '73.4286rem'
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
