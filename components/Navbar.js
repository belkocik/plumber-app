import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  useColorModeValue,
  Container,
  Link,
  Stack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import ThemeToggleButton from "./ThemeToggleButton";
import NextLink from "next/link";
import { IoWaterOutline } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href || (href.length > 1 && path.startsWith(href));
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  const bgColor = useColorModeValue("#F7F2F2", "#21262D");
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p="4px"
        pl={3}
        pr={3}
        rounded="3xl"
        bg={active ? bgColor : undefined}
        color={active ? textColor : inactiveColor}
        target={target}
        style={{ textDecoration: "none" }}
        transition="1000ms"
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};
const Navbar = (props) => {
  const borderColor = useColorModeValue("#EDE9E9", "gray.800");
  const backgroundColor = useColorModeValue("#EDE9E9", "#090C10");
  const { path } = props;

  return (
    <Box as="nav" {...props} mt="16px">
      <Container maxW="2xl">
        <Flex gap="4" align="center" minWidth="max-content">
          <Box>
            <Heading size="md">
              <IoWaterOutline size={28} color="#07344D" />
            </Heading>
          </Box>
          <Spacer />
          <Box bg={backgroundColor} rounded="3xl">
            <Stack
              direction="row"
              display={{ base: "none", md: "flex" }}
              width={{ base: "full", md: "auto" }}
              alignItems="center"
              //   mt={{ base: 4, md: 0 }}
              border="2px"
              borderColor={borderColor}
              rounded="3xl"
              p={1}
            >
              <LinkItem href="/" path={path}>
                Strona główna
              </LinkItem>
              <LinkItem href="/about" path={path}>
                O firmie
              </LinkItem>
              <LinkItem href="/projects" path={path}>
                Realizacje
              </LinkItem>
              <LinkItem href="/contact" path={path}>
                Kontakt
              </LinkItem>
            </Stack>
          </Box>

          <Box display={{ base: "inline-block", md: "none" }} zIndex={2}>
            <Menu isLazy justify="center" align="center">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                rounded="2xl"
              />
              <MenuList bg={useColorModeValue("white", "#0D1117")}>
                <MenuGroup>
                  <NextLink href="/" passHref>
                    <MenuItem
                      as={Link}
                      _focus={{ boxShadow: "none" }}
                      style={{ textDecoration: "none" }}
                    >
                      Strona główna
                    </MenuItem>
                  </NextLink>
                  <NextLink href="/about" passHref>
                    <MenuItem
                      as={Link}
                      _focus={{ boxShadow: "none" }}
                      style={{ textDecoration: "none" }}
                    >
                      O firmie
                    </MenuItem>
                  </NextLink>
                  <NextLink href="/projects/" passHref>
                    <MenuItem
                      style={{ gap: 4, textDecoration: "none" }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Realizacje
                    </MenuItem>
                  </NextLink>
                  <NextLink href="/contact/" passHref>
                    <MenuItem
                      style={{ gap: 4, textDecoration: "none" }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Kontakt
                    </MenuItem>
                  </NextLink>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>

          <Spacer />
          <Box>
            <ThemeToggleButton />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
