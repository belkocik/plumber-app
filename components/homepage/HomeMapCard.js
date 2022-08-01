import React from "react";
import { Center, useColorModeValue } from "@chakra-ui/react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const HomeMapCard = () => {
  const mapboxThemeStyle = useColorModeValue(
    "mapbox://styles/mapbox/navigation-day-v1",
    "mapbox://styles/mapbox/navigation-night-v1"
  );
  return (
    <Center
      id="card--map--all"
      tabIndex="-1"
      className="card--map"
      p={{ base: 5, md: 0 }}
      bg="backgroundColor"
      borderWidth="2px"
      borderColor="borderColor"
      rounded="3xl"
      align="center"
    >
      <Map
        initialViewState={{
          longitude: 21.338631,
          latitude: 50.102242,
          zoom: 11,
        }}
        style={{
          overflow: "hidden",
        }}
        mapStyle={mapboxThemeStyle}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
        id="map"
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
  );
};

export default HomeMapCard;
