import React from "react";
import { NextSeo } from "next-seo";
import { Box, Stack, Heading } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";
import LogoCard from "../components/aboutpage/LogoCard";
import AboutCompanyCard from "../components/aboutpage/AboutCompanyCard";
import ServiceImageCard from "../components/aboutpage/ServiceImageCard";
import { getAboutPageData } from "../lib/data";

export const getServerSideProps = async () => {
  const data = await getAboutPageData();

  return {
    props: {
      aboutPage: data.abouts[0],
    },
  };
};

const About = ({ aboutPage }) => {
  return (
    <PageLayout>
      <NextSeo
        title="Hydraulik Dębica - Instalacje Hydrauliczne Krzysztof Niedbalec - O firmie"
        description="Głównie nasz serwis opieramy na instalacjach hydraulicznych i gazowych, gdzie wykonujemy systemy wody użytkowej i kanalizacji sanitarnej oraz montaż przeróżnych systemów ogrzewania wody użytkowej (c.w.u.) czy też nowoczesnych systemów centralnego ogrzewania (c.o.). Instalacje gazowe, centralne ogrzewanie, ogrzewanie podłogowe, instalacje hydrauliczne."
      />

      <Box>
        <Box m={2}>
          <Box>
            <Stack spacing={4} direction={{ base: "column", md: "row" }}>
              <LogoCard aboutTitle={aboutPage.aboutTitle} />
              <AboutCompanyCard aboutDescription={aboutPage.aboutDescription} />
            </Stack>
          </Box>

          <Box
            bg="backgroundColor"
            rounded="3xl"
            mt="16px"
            borderWidth="2px"
            borderColor="borderColor"
            p={{ base: 4, lg: 12 }}
          >
            <Heading fontSize="3xl" color="headingColor" fontWeight="semibold">
              Nasza oferta i usługi
            </Heading>
          </Box>

          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            mt="16px"
          >
            <ServiceImageCard
              serviceHeader={aboutPage.service1Header}
              imageUrl={aboutPage.service1.url}
              imageDesc={aboutPage.service1ImageDesc}
            />

            <ServiceImageCard
              serviceHeader={aboutPage.service2Header}
              imageUrl={aboutPage.service2.url}
              imageDesc={aboutPage.service2ImageDesc}
            />
          </Stack>
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            mt="16px"
          >
            <ServiceImageCard
              serviceHeader={aboutPage.service3Header}
              imageUrl={aboutPage.service3.url}
              imageDesc={aboutPage.service3ImageDesc}
            />
          </Stack>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default About;
