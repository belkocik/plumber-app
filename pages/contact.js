import React from "react";
import { NextSeo } from "next-seo";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Box,
  useColorModeValue,
  Stack,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";

import PageLayout from "../components/layouts/PageLayout";
import FacebookCard from "../components/mutual/FacebookCard";
import CallCard from "../components/mutual/CallCard";
import MailCard from "../components/mutual/MailCard";

const Contact = () => {
  const mapboxThemeStyle = useColorModeValue(
    "mapbox://styles/mapbox/navigation-day-v1",
    "mapbox://styles/mapbox/navigation-night-v1"
  );

  return (
    <PageLayout>
      <NextSeo
        title="Hydraulik Dębica - Instalacje Hydrauliczne Krzysztof Niedbalec - Kontakt"
        description="Instalacje gazowe, centralne ogrzewanie, ogrzewanie podłogowe, instalacje hydrauliczne."
      />
      <Box m={2}>
        <Box id="card--map--all" tabIndex="-1" className="card--map">
          <Center>
            <Map
              initialViewState={{
                longitude: 21.338631,
                latitude: 50.102242,
                zoom: 11,
              }}
              style={{
                overflow: "hidden",
                height: "70vh",
                width: "100vw",
              }}
              mapStyle={mapboxThemeStyle}
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
              tabIndex="-1"
            >
              <Marker
                longitude={21.338631}
                latitude={50.102242}
                color="#206ea0"
                role="marker"
              />
            </Map>
          </Center>
        </Box>
        <Stack
          spacing={4}
          direction={{ base: "column", md: "row" }}
          mt="16px"
          justify="center"
        >
          <MailCard />
          <CallCard />
          <FacebookCard />

          <Flex
            direction="column"
            justify="center"
            bg="backgroundColor"
            borderWidth="2px"
            borderColor="borderColor"
            rounded="3xl"
            p={5}
            textAlign={{ base: "center", lg: "left" }}
            fontWeight="semibold"
          >
            <Text>Instalacje Hydrauliczne Krzysztof Niedbalec</Text>
            <Text>Wiewiórka 216A, 39-209 Zasów (woj. podkarpackie)</Text>
            <Text>Telefon: xxx-xxx-xxx</Text>
            <Text>NIP: 872-184-0852</Text>
          </Flex>
        </Stack>
      </Box>
    </PageLayout>
  );
};

export default Contact;
