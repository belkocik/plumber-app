import React from "react";
import { useColorModeValue, Box, Center, Link } from "@chakra-ui/react";
import { PhoneCall } from "tabler-icons-react";

const CallCard = () => {
  const borderColor = useColorModeValue("#F7F2F2", "gray.800");
  const contactBackgroundColor = useColorModeValue("#9AE6B4", "#0D1117");

  return (
    <Link href="tel:+1123-456-7890">
      {" "}
      <Center
        p={5}
        bg={contactBackgroundColor}
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
          <PhoneCall size={128} />
        </Box>
      </Center>
    </Link>
  );
};

export default CallCard;
