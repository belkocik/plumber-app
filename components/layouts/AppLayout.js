import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box, Container } from "@chakra-ui/react";

const AppLayout = ({ children, router }) => {
  return (
    <Box>
      <Container
        direction="column"
        align="center"
        maxW="6xl"
        m="0 auto"
        p="0"
        mt={{ base: 0, md: 10 }}
      >
        <Navbar path={router.asPath} mb={10} />
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default AppLayout;
