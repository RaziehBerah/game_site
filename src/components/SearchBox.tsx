import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <form style={{ width: "100%" }}>
      <InputGroup>
        <InputLeftElement children={<CiSearch />} />
        <Input
          placeholder="Search..."
          borderRadius={"15px"}
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBox;
