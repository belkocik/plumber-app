import React from "react";
import { Error404 } from "tabler-icons-react";
import { Box, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box>
      <Error404 size={128} />
      <Text fontWeight="semibold" fontSize="2xl">
        This page does not exist!
      </Text>
    </Box>
  );
};

export default NotFound;
