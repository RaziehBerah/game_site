import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortOrderList = () => {
  const sortOrders = [
    { value: "name", label: "Name " },
    { value: "-released", label: " Raleased Date" },
    { value: "-rating", label: "Rate " },
    { value: "-metacritic", label: "Popularity " },
    { value: "", label: " " },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {" "}
        Sort By
      </MenuButton>
      <MenuList>
        {sortOrders?.map((s) => (
          <MenuItem key={s.value}>{s.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortOrderList;
