import React from "react";
import { useColorModeValue, Box, Center, Link } from "@chakra-ui/react";
import { BrandFacebook } from "tabler-icons-react";

const FacebookCard = () => {
  const borderColor = useColorModeValue("#F7F2F2", "gray.800");
  const fbBackgroundColor = useColorModeValue("#d8eeff", "#0D1117");
  return (
    <Link href="https://chakra-ui.com" isExternal>
      {" "}
      <Center
        p={5}
        bg={fbBackgroundColor}
        color="#FFFFFF"
        borderWidth="2px"
        borderColor={borderColor}
        rounded="3xl"
      >
        <Box
          _hover={{
            transform: "translateY(-4px) scale(1.05)",
          }}
          transition="200ms linear"
        >
          <BrandFacebook size={128} />
        </Box>
      </Center>
    </Link>
  );
};

export default FacebookCard;
