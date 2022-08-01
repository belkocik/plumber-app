import { Box, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <VStack
      align="center"
      opacity={{ base: "0.6", lg: "0.7" }}
      fontSize="sm"
      pt={10}
      pb={4}
    >
      <Box>
        &copy; {new Date().getFullYear()} Firma Hydrauliczna Krzysztof Niedbalec
      </Box>
      <Box>
        Built with{" "}
        <Box as="span" color="red">
          ♥
        </Box>{" "}
        and{" "}
        <Link
          href="https://nextjs.org/"
          isExternal
          display="inline-block"
          position="relative"
          _focus={{
            WebkitTapHighlightColor: "transparent",
          }}
          // _hover={{
          //   color: "orange.400",
          // }}
          _after={{
            content: `""`,
            position: "absolute",
            width: "100%",
            transform: "scaleX(0)",
            height: "2px",
            bottom: 0,
            left: 0,
            backgroundColor: "#0087ca",
            transformOrigin: "bottom right",
            transition: "transform 0.25s ease-out",
          }}
          _hover={{
            _after: {
              transform: "scaleX(1)",
              transformOrigin: "bottom left",
            },
          }}
          color={useColorModeValue("blue.500", "blue.300")}
        >
          Next.js
        </Link>{" "}
        by{" "}
        <NextLink href="https://www.marcinniedbalec.xyz/" passHref>
          <Link
            isExternal
            _focus={{
              WebkitTapHighlightColor: "transparent",
            }}
            _hover={{
              textDecor: "none",
              color: "cyan.400",
            }}
            color={useColorModeValue("teal.900", "teal.300")}
            textDecoration="none"
            transition="0.25s ease-out"
          >
            Marcin Niedbalec
          </Link>
        </NextLink>
      </Box>
    </VStack>
  );
};

export default Footer;
Footer;
