import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useplatforms from "../hooks/useplatforms";

const PlatformList = () => {
  const { data: platforms, error } = useplatforms();
  if (error) return <Text>{error.message}</Text>;
  return (
    <Menu >
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {" "}
        Platforms
      </MenuButton>
      <MenuList>
        {platforms?.results.map((p) => (
          <MenuItem key={p.id}>{p.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
