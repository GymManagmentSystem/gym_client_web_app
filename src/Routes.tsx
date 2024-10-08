
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Login /> },
      { path: "home", element: <Home /> }, 
    ],
  },
]);

export default router;
