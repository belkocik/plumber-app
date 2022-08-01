import React from "react";
import { Center, VStack, Heading, Text } from "@chakra-ui/react";

const WorkareaCard = ({ workArea }) => {
  return (
    <Center
      p={5}
      bg="backgroundColor"
      borderWidth="2px"
      borderColor="borderColor"
      rounded="3xl"
      align="center"
    >
      <VStack>
        <Heading
          as="h2"
          fontSize="xl"
          color="headingColor"
          fontWeight="semibold"
        >
          Teren wykonywania usług
        </Heading>

        <Text fontWeight="normal">{workArea}</Text>
      </VStack>
    </Center>
  );
};

export default WorkareaCard;
