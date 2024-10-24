
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Schedule from "./pages/Schedule";
import Payment from "./pages/Payment";
import Announcements from "./pages/Announcements";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Login /> },
      { path: "home", element: <Home /> }, 
      { path: "exercises", element: <Exercises /> }, 
      { path: "schedule", element: <Schedule /> }, 
      { path: "payment", element: <Payment/> }, 
      { path: "announcements", element: <Announcements /> }, 
     
    ],
  },
]);

export default router;
