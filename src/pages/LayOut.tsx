import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayOut = () => {
  return (
    <Box padding={"10px"}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default LayOut;
