import { Switch, useColorMode } from "@chakra-ui/react";

const SwithMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch
      isChecked={colorMode == "dark"}
      onClick={toggleColorMode}
      colorScheme="green"
    >
      Dark Mode
    </Switch>
  );
};

export default SwithMode;
