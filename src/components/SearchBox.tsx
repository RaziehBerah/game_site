import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import usegameStoreQuery from "../store";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = usegameStoreQuery((s) => s.setSearchText);
  const Navigate=useNavigate()
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current?.value);
          ref.current.value = "";
        }
        Navigate("/")
      }}
    >
      <InputGroup>
      <InputLeftElement pointerEvents="none"><CiSearch/></InputLeftElement>
       
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
