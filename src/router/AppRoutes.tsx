import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { QuemSomos } from "../pages/QuemSomos/QuemSomos";
import { TrabalheConosco } from "../pages/TrabalheConosco/TrabalheConosco";
import { Contato } from "../pages/Contato/Contato";
import { Orcamento } from "../pages/Orcamento/Orcamento";
import { NotFound } from "../pages/NotFound/NotFound";
import { Borrachas } from "../pages/Borrachas/Borrachas";
import { AcessoriosManutencao } from "../pages/Acessorios/AcessoriosManutencao";
import { SolucoesIndustriais } from "../pages/SolucoesIndustriais/SolucoesIndustriais";
import { Eletrica } from "../pages/Eletrica/Eletrica";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quem-somos",
        element: <QuemSomos />,
      },
      { path: '/produtos/eletrica', element: <Eletrica /> },
      { path: '/produtos/borrachas', element: <Borrachas /> },
      { path: '/produtos/acessorios', element: <AcessoriosManutencao /> },
      { path: '/produtos/solucoes-industriais', element: <SolucoesIndustriais /> },
      {
        path: "/trabalhe-conosco",
        element: <TrabalheConosco />,
      },
        {
        path: "/contato",
        element: <Contato />,
      },
        {
        path: "/orcamento",
        element: <Orcamento />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ]
  }
]);
