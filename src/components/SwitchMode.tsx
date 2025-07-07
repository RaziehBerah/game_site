import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const SwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">Dark Mod</Text>
    </HStack>
  );
};

export default SwitchMode;
