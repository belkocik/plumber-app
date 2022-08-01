import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  // const variants = {
  //   hidden: { opacity: 0, x: 0, y: 100 },
  //   enter: { opacity: 1, x: 0, y: 0 },
  //   exit: { opacity: 0, x: 0, y: -200 },
  // };
  return (
    <Box>
      <motion.main
        // initial="hidden"
        // animate="enter"
        // exit="exit"
        // variants={variants}
        // transition={{ type: "linear", delay: 1 }}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {children}
      </motion.main>
    </Box>
  );
};

export default Layout;
