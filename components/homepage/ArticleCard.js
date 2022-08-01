import React from "react";
import { Center, VStack, Heading, Box, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ArticleCard = ({ title, description }) => {
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
          {title}
        </Heading>

        <Box fontWeight="normal">
          <Text as="span">
            {description}
            {"..."}{" "}
          </Text>
          <Text as="span" color="purple.400" align="center">
            <NextLink href="/posts/czym-zajmuje-sie-hydraulik" passHref>
              <Link style={{ textDecoration: "none" }}>
                czytaj więcej <ExternalLinkIcon w={4} h={4} mb={1} />
              </Link>
            </NextLink>
          </Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default ArticleCard;
