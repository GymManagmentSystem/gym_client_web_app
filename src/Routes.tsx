
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Schedule from "./pages/Schedule";
import ScheduleDetails from "./pages/ScheduleDetails";
import Payments from "./pages/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Login /> },
      { path: "home", element: <Home /> }, 
      { path: "exercises", element: <Exercises /> }, 
      { path: "schedule", element: <Schedule /> }, 
      { path: "payments", element: <Payments /> }, 
      { path: "scheduleDetails/:weekNo/:dayNo", element: <ScheduleDetails /> }, 
     
    ],
  },
]);

export default router;
