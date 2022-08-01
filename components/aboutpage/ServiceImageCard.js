import React from "react";
import { Center, Box, Text, Img, useColorModeValue } from "@chakra-ui/react";

const ServiceImageCard = ({ serviceHeader, imageUrl, imageDesc }) => {
  const serviceBgOpacity = useColorModeValue(
    "rgba(32,110,160,0.3)",
    "rgba(1, 34, 38,0.5)"
  );
  const serviceBgHoverOpacity = useColorModeValue(
    "rgba(32,110,160,0)",
    "rgba(1, 34, 38,0)"
  );
  return (
    <Center
      bg="backgroundColor"
      rounded="3xl"
      borderWidth="2px"
      borderColor="borderColor"
      p={{ base: 4, lg: 6 }}
    >
      <Box pos="relative" overflow="hidden">
        <Box
          pos="absolute"
          w="100%"
          h="100%"
          bg={serviceBgOpacity}
          zIndex="2"
          style={{ borderRadius: "24px" }}
          _hover={{
            bg: serviceBgHoverOpacity,
          }}
          transition="200ms linear"
        />

        <Text
          pos="absolute"
          top="50%"
          left="0%"
          color="white"
          fontWeight="bold"
          fontSize={{ base: "2xl", lg: "3xl" }}
          w="100%"
          textAlign="center"
          zIndex="3"
        >
          {serviceHeader}
        </Text>
        <Img
          src={imageUrl}
          style={{ borderRadius: "24px" }}
          height={{ base: 300, lg: 500 }}
          width="100vh"
          objectFit={{ base: "cover", lg: "fill" }}
          loading="lazy"
          alt={imageDesc}
        />
      </Box>
    </Center>
  );
};

export default ServiceImageCard;
