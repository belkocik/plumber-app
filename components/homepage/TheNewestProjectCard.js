import React from "react";
import {
  Center,
  VStack,
  Heading,
  Box,
  Flex,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

const TheNewestProjectCard = ({
  title,
  description,
  slug,
  location,
  formattedDate,
}) => {
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
          Najnowszy zrealizowany projekt
        </Heading>
        <Box align="center" justify="space-between" w="full">
          <Box>
            <Text color="teal" pb={1} fontWeight="semibold">
              {title}
            </Text>
            <Text noOfLines={2}>{description}</Text>
          </Box>
        </Box>

        <Flex align="center" justify="space-between" w="full">
          <Box>
            <NextLink href={`/projects/${slug}`} passHref>
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
                  Zobacz
                </Button>
              </Link>
            </NextLink>
          </Box>

          <Text color="locationAndDateColor">
            {location}, {formattedDate}
          </Text>
        </Flex>
      </VStack>
    </Center>
  );
};

export default TheNewestProjectCard;
