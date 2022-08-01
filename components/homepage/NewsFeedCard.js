import React from "react";
import {
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CgSmileSad } from "react-icons/cg";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const NewsFeedCard = ({ newsFeed }) => {
  return (
    <Center
      bg="backgroundColor"
      borderWidth="2px"
      borderColor="borderColor"
      rounded="3xl"
      align="center"
      p={{ base: 0, md: 5 }}
    >
      <Popover trigger="hover" closeOnBlur={false} placement="top">
        <PopoverTrigger role="popover">
          <Center
            w="full"
            h={{ base: "128px", md: "full" }}
            fontSize="xl"
            fontWeight="semibold"
            align="center"
            justify="center"
          >
            <VStack>
              <InfoOutlineIcon h={6} w={6} />
              <Text>Pokaż promocje</Text>
            </VStack>
          </Center>
        </PopoverTrigger>
        <PopoverContent
          bg="backgroundColor"
          borderWidth="2px"
          borderColor="borderColor"
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Najnowsze rabaty</PopoverHeader>
          <PopoverBody>
            {newsFeed || (
              <Text>
                {" "}
                <CgSmileSad size="50px" /> W tej chwili nie trwa żadna akcja
                promocyjna.
              </Text>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  );
};

export default NewsFeedCard;
