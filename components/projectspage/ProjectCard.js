import React from "react";
import {
  Box,
  Link,
  Stack,
  Img,
  Heading,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

const convertData = (date) => {
  const [year, month, day] = date.split("-");
  return [day, month, year].join("/");
};

const ProjectCard = ({
  slug,
  coverImageUrl,
  title,
  description,
  location,
  date,
}) => {
  const locationAndDateColor = useColorModeValue("black", "cyan.600");
  return (
    <NextLink href={`/projects/${slug}`} passHref>
      <Link style={{ textDecoration: "none" }}>
        <Box
          bg="backgroundColor"
          rounded="3xl"
          borderWidth="2px"
          borderColor="borderColor"
          p={2}
          _hover={{
            transform: "translateY(-4px) scale(1.02)",
          }}
          transition="200ms linear"
          cursor="pointer"
          h="full"
        >
          <Box p={2}>
            <Stack align="center">
              <Img
                rounded="3xl"
                h="300px"
                w="500px"
                src={coverImageUrl}
                objectFit="cover"
                alt=""
              />
              <Box>
                <Heading fontWeight="semibold" color="teal" as="h3">
                  {title}
                </Heading>
                <Text pt={1}>{description}</Text>
              </Box>
              <Flex
                align="center"
                justify="space-between"
                w="full"
                color={locationAndDateColor}
                pt={2}
              >
                <Text>{location}</Text>
                <Text>{convertData(date)}</Text>
              </Flex>
            </Stack>
          </Box>
        </Box>
      </Link>
    </NextLink>
  );
};

export default ProjectCard;
