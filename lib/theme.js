import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#F7F2F2", "#090C10")(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const modeStyles = {
  // light/dark mode colors for components
  semanticTokens: {
    colors: {
      borderColor: {
        default: "#F7F2F2",
        _dark: "gray.800",
      },
      backgroundColor: {
        default: "#FFFFFF",
        _dark: "#0D1117",
      },
      headingColor: {
        default: "black",
        _dark: "#206ea0",
      },
      buttonBackgroundColor: {
        default: "#F7F2F2",
        _dark: "#21262D",
      },
      buttonBackgroundHover: {
        default: "#FFFFFF",
        _dark: "#0D1117",
      },
      locationAndDateColor: {
        default: "black",
        _dark: "cyan.600",
      },
      logoHeadingColor: {
        default: "#206ea0",
        _dark: "#154f73",
      },
      headingColor: {
        default: "black",
        _dark: "#206ea0",
      },
    },
  },
};

const theme = extendTheme({
  config,
  styles,
  ...modeStyles,
});

export default theme;
