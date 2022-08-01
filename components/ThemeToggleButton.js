import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
// import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Sun, MoonStars } from "tabler-icons-react";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue("gray", "yellow")}
      icon={useColorModeValue(<MoonStars size={20} />, <Sun size={20} />)}
      onClick={toggleColorMode}
      variant="outline"
      height={8}
      width={8}
      rounded="2xl"
    ></IconButton>
  );
};

export default ThemeToggleButton;
