import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { QuemSomos } from "../pages/QuemSomos/QuemSomos";

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
      }
    ]
  }
]);
