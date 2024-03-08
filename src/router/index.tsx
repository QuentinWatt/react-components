import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
