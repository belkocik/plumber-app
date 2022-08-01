import React from "react";
import {
  Center,
  VStack,
  Heading,
  Text,
  Button,
  Link,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

const ShowProjectsCard = () => {
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
          as="h3"
          fontSize="xl"
          color="headingColor"
          fontWeight="semibold"
        >
          Projekty
        </Heading>
        <Text mt={4} fontWeight="normal">
          Nasza firma realizuje coraz to większą liczbę nowoczesnych projektów.
        </Text>
        <Box align="center" mt={2}>
          <NextLink href="/projects" passHref>
            <Link style={{ textDecoration: "none" }}>
              <Button
                leftIcon={<ChevronRightIcon />}
                bg="buttonBackgroundColor"
                _hover={{
                  bg: "buttonBackgroundHover",
                }}
                transition="200ms linear"
                rounded="3xl"
                fontWeight="normal"
              >
                Wyświetl realizacje
              </Button>
            </Link>
          </NextLink>
        </Box>
      </VStack>
    </Center>
  );
};

export default ShowProjectsCard;
