import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const ProjectsHeroCard = () => {
  return (
    <Box
      bg="backgroundColor"
      rounded="3xl"
      p={{ base: 4, lg: 12 }}
      borderWidth="2px"
      borderColor="borderColor"
      align="center"
    >
      <Heading as="h1" color="headingColor">
        Usługi hydrauliczne - Dębica i okolice
      </Heading>
      <Heading as="h2" fontSize="lg" fontWeight="500" pt={1}>
        Nasza firma realizuje projekty na terenie powiatu Dębickiego i jego
        okolicy.
      </Heading>
    </Box>
  );
};

export default ProjectsHeroCard;
