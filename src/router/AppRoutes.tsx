import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { QuemSomos } from "../pages/QuemSomos/QuemSomos";
import { TrabalheConosco } from "../pages/TrabalheConosco/TrabalheConosco";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quemsomos",
        element: <QuemSomos />,
      },
      {
        path: "/trabalheconosco",
        element: <TrabalheConosco />,
      }
    ]
  }
]);
