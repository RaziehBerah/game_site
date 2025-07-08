import { Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Text>
        {isRouteErrorResponse(error) ? " Page Not Fount" : "Unexpected Error"}
      </Text>
    </>
  );
};

export default ErrorPage;
