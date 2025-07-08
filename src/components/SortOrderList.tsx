import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usegameStoreQuery from "../store";

const SortOrderList = () => {
  const sortOrders = [
    { value: "name", label: "Name " },
    { value: "-released", label: " Raleased Date" },
    { value: "-rating", label: "Rate " },
    { value: "-metacritic", label: "Popularity " },
    { value: "", label: " " },
  ];
  const setSortOrder = usegameStoreQuery((s) => s.setsortOrder);
  const selectedOrder = usegameStoreQuery((s) => s.gameQuery.sortOrder);
  const selectedTitle = sortOrders.find((s) => s.value == selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedTitle ? `Sort By ${selectedTitle.label}` : "Sort By"}
      </MenuButton>
      <MenuList>
        {sortOrders?.map((s) => (
          <MenuItem key={s.value} onClick={() => setSortOrder(s.value)}>
            {s.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortOrderList;
