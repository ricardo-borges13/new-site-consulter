import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { QuemSomos } from "../pages/QuemSomos/QuemSomos";
import { TrabalheConosco } from "../pages/TrabalheConosco/TrabalheConosco";
import { Contato } from "../pages/Contato/Contato";
import { Orcamento } from "../pages/Orcamento/Orcamento";

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
      },
        {
        path: "/contato",
        element: <Contato />,
      },
        {
        path: "/orcamento",
        element: <Orcamento />,
      }
    ]
  }
]);
