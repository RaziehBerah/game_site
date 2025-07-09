import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useplatforms from "../hooks/useplatforms";
import usegameStoreQuery from "../store";

const PlatformList = () => {
  const { data: platforms, error } = useplatforms();
  const setPlatformId = usegameStoreQuery((s) => s.setplatformId);
  const selectedId = usegameStoreQuery((s) => s.gameQuery.platformId);
  const selectedPlatform = platforms?.results.find((p) => p.id == selectedId);
  if (error) return <Text>{error.message}</Text>;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {" "}
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((p) => (
          <MenuItem onClick={() => setPlatformId(p.id)} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
