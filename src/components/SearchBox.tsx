import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import usegameStoreQuery from "../store";

const SearchBox = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = usegameStoreQuery((s) => s.setSearchText);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current?.value);
          ref.current.value = "";
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<CiSearch />} />
        <Input
          placeholder="Search..."
          borderRadius={"15px"}
          variant={"filled"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBox;
