import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "../components/layouts/AppLayout";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <DefaultSeo
            title="Hydraulik Dębica - Instalacje Hydrauliczne Krzysztof Niedbalec"
            description="Instalacje gazowe, centralne ogrzewanie, ogrzewanie podłogowe, instalacje hydrauliczne - Hydraulik - Dębica i okolice (województwo podkarpackie)"
            openGraph={{
              type: "website",
              locale: "pl_PL",
              url: "https://plumber-app-chakraui.vercel.app/",
              title:
                "Hydraulik Dębica - Instalacje Hydrauliczne Krzysztof Niedbalec",
              description:
                "Instalacje gazowe, centralne ogrzewanie, ogrzewanie podłogowe, instalacje hydrauliczne - Hydraulik - Dębica i okolice (województwo podkarpackie)",

              site_name: "Instalacje Hydrauliczne Krzysztof Niedbalec - Dębica",
            }}
          />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
