import React from "react";
import { Center, VStack, Heading, Flex, Text } from "@chakra-ui/react";

const AboutCard = ({ title, titleDescription }) => {
  // const borderColor = useColorModeValue("#F7F2F2", "gray.800");
  // const backgroundColor = useColorModeValue("#FFFFFF", "#0D1117");
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
        <Heading as="h1" fontSize="xl" color="headingColor" fontWeight="bold">
          {title}
        </Heading>
        <Flex>
          <Center>
            <Text fontWeight="normal">{titleDescription}</Text>
          </Center>
        </Flex>
      </VStack>
    </Center>
  );
};

export default AboutCard;

{
  /* <Center
p={5}
bg={backgroundColor}
borderWidth="2px"
borderColor={borderColor}
rounded="3xl"
align="center"
>
<VStack>
  <Heading
    as="h1"
    fontSize="xl"
    color={headingColor}
    fontWeight="bold"
  >
    {homePage.title}
  </Heading>
  <Flex>
    <Center>
      <Text fontWeight="normal">{homePage.titleDescription}</Text>
    </Center>
  </Flex>
</VStack>
</Center> */
}
