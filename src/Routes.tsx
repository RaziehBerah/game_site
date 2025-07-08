import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LayOut from "./pages/LayOut";
import GameDetailsPage from "./pages/GameDetailsPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
        { index: true, element: <HomePage /> },
        {path:"games/:slug" ,element:<GameDetailsPage/>}
    ],
  },
]);

export default Routes;
