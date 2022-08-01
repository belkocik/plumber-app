import React from "react";
import { Box, Text } from "@chakra-ui/react";

const AboutCompanyCard = ({ aboutDescription }) => {
  return (
    <Box
      bg="backgroundColor"
      rounded="3xl"
      p={{ base: 4, lg: 12 }}
      borderWidth="2px"
      borderColor="borderColor"
    >
      <Text textAlign="justify">{aboutDescription}</Text>
    </Box>
  );
};

export default AboutCompanyCard;
