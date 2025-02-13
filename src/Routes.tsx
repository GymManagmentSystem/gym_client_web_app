import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Schedule from "./pages/Schedule";
import ScheduleDetails from "./pages/ScheduleDetails";
import Payments from "./pages/Payments";
import CommonHome from "./pages/CommonHome";
import About from "./pages/About";
import Memberships from "./pages/Memberships";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "exercises", element: <Exercises /> },
      { path: "schedule", element: <Schedule /> },
      { path: "payments", element: <Payments /> },
      { path: "scheduleDetails/:weekNo/:dayNo", element: <ScheduleDetails /> },
      { path: "commonHome", element: <CommonHome /> },
      { path: "about", element: <About /> },
      { path: "memberships", element: <Memberships /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
