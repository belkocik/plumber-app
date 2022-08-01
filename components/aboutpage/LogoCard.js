import React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { IoWaterOutline } from "react-icons/io5";

const LogoCard = ({ aboutTitle }) => {
  const logoColor = useColorModeValue("#0d77a0", "#07344D"); // couldn't define it in theme.js - it doesn't work with icons (?)
  return (
    <Box
      bg="backgroundColor"
      rounded="3xl"
      p={{ base: 4, lg: 12 }}
      borderWidth="2px"
      borderColor="borderColor"
    >
      <IoWaterOutline size={72} color={logoColor} />
      <Heading as="h1" color="logoHeadingColor">
        {aboutTitle}
      </Heading>
    </Box>
  );
};

export default LogoCard;
