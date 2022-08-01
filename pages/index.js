import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import { getHomePageDataAndTheNewestProject } from "../lib/data";

import FacebookCard from "../components/mutual/FacebookCard";
import CallCard from "../components/mutual/CallCard";
import MailCard from "../components/mutual/MailCard";
import PageLayout from "../components/layouts/PageLayout";
import AboutCard from "../components/homepage/AboutCard";
import ServiceCard from "../components/homepage/ServiceCard";
import WorkareaCard from "../components/homepage/WorkareaCard";
import ShowProjectsCard from "../components/homepage/ShowProjectsCard";
import NewsFeedCard from "../components/homepage/NewsFeedCard";
import TheNewestProjectCard from "../components/homepage/TheNewestProjectCard";
import ArticleCard from "../components/homepage/ArticleCard";
import HomeMapCard from "../components/homepage/HomeMapCard";

export const getServerSideProps = async () => {
  const data = await getHomePageDataAndTheNewestProject();

  return {
    props: {
      newestProject: data.projects[0],
      homePage: data.homes[0],
      article: data.posts[0],
    },
  };
};

export default function Home({ homePage, newestProject, article }) {
  let date = newestProject.date; // e.g. 2022-07-21
  const [year, month, day] = date.split("-");
  const formattedDate = [day, month, year].join("/"); // output: 21/07/2022

  return (
    <PageLayout>
      <NextSeo
        title="Hydraulik Dębica - Instalacje Hydrauliczne Krzysztof Niedbalec"
        description="Instalacje gazowe, centralne ogrzewanie, ogrzewanie podłogowe, instalacje hydrauliczne - Hydraulik - Dębica i okolice (województwo podkarpackie)"
      />

      <LocalBusinessJsonLd
        type="Hydraulik"
        id="https://plumber-app-chakraui.vercel.app/"
        name="Instalacje Hydrauliczne Krzysztof Niedbalec Dębica"
        description="Instalacje gazowe, centralne ogrzewanie, ogrzewanie podłogowe, instalacje hydrauliczne (Dębica - województwo podkarpackie)."
        address={{
          streetAddress: "Wiewiórka 216",
          addressLocality: "Wiewiórka",
          addressRegion: "Podkarpackie",
          postalCode: "39209",
          addressCountry: "PL",
        }}
        geo={{
          latitude: "50.102242",
          longitude: "21.338631",
        }}
        sameAs={[
          "https://fixly.pl/kategorie/hydraulik/debica",
          "https://www.oferteo.pl/hydraulicy/debica",
          "https://www.olx.pl/d/uslugi-firmy/debica/q-hydraulik/",
        ]}
        areaServed={[
          {
            geoMidpoint: {
              latitude: "50.0516",
              longitude: "21.4117",
            },
            geoRadius: "20000",
          },
          {
            geoMidpoint: {
              latitude: "50.1969",
              longitude: "21.2769",
            },
            geoRadius: "20000",
          },
        ]}
      />
      <Box m={2}>
        <Stack spacing={4} direction={{ base: "column", md: "row" }}>
          <AboutCard
            title={homePage.title}
            titleDescription={homePage.titleDescription}
          />
          <HomeMapCard />
        </Stack>

        <Stack spacing={4} direction={{ base: "column", md: "row" }} mt="16px">
          <FacebookCard />
          <ServiceCard service={homePage.service} />
          <WorkareaCard workArea={homePage.workArea} />
        </Stack>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} mt="16px">
          <ShowProjectsCard />
          <NewsFeedCard newsFeed={homePage.newsFeed} />
          <TheNewestProjectCard
            title={newestProject.title}
            description={newestProject.description}
            slug={newestProject.slug}
            location={newestProject.location}
            formattedDate={formattedDate}
          />
        </Stack>

        <Stack spacing={4} direction={{ base: "column", md: "row" }} mt="16px">
          <ArticleCard
            title={article.title}
            description={article.description}
          />
          <MailCard />
          <CallCard />
        </Stack>
      </Box>
    </PageLayout>
  );
}
