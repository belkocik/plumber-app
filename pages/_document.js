import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta
            name="application-name"
            content="Instalacje Hydrauliczne Krzysztof Niedbalec"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Instalacje Hydrauliczne Krzysztof Niedbalec"
          />
          <meta
            name="description"
            content="Instalacje gazowe, centralne ogrzewanie, ogrzewanie podłogowe, instalacje hydrauliczne - Hydraulik - Dębica i okolice (Podkarpacie)"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
