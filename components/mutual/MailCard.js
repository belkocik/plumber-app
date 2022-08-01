import React from "react";
import { useColorModeValue, Box, Center, Link } from "@chakra-ui/react";
import { Mail } from "tabler-icons-react";

const MailCard = () => {
  const borderColor = useColorModeValue("#F7F2F2", "gray.800");

  const emailBackgroundColor = useColorModeValue("#dbcda2", "#0D1117");
  return (
    <Link href="mailto:marcin.niedbalec@o2.pl">
      {" "}
      <Center
        p={5}
        bg={emailBackgroundColor}
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
          <Mail size={128} />
        </Box>
      </Center>
    </Link>
  );
};

export default MailCard;
