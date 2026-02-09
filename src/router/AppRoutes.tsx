import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { lazy } from 'react'; // Import React and Suspense

// Dynamically import page components
const Home = lazy(() => import('../pages/Home'));
const QuemSomos = lazy(() => import('../pages/QuemSomos'));
const TrabalheConosco = lazy(() => import('../pages/TrabalheConosco'));
const Contato = lazy(() => import('../pages/Contato'));
const Orcamento = lazy(() => import('../pages/Orcamento'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Borrachas = lazy(() => import('../pages/Borrachas'));
const AcessoriosManutencao = lazy(() => import('../pages/Acessorios'));
const SolucoesIndustriais = lazy(() => import('../pages/SolucoesIndustriais'));
const Eletrica = lazy(() => import('../pages/Eletrica'));


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/quem-somos', element: <QuemSomos /> },
      { path: '/produtos/material-eletrico', element: <Eletrica /> },
      { path: '/produtos/borrachas-industriais', element: <Borrachas /> },
      {
        path: '/produtos/acessorios-industriais',
        element: <AcessoriosManutencao />,
      },
      {
        path: '/produtos/solucoes-industriais',
        element: <SolucoesIndustriais />,
      },
      { path: '/trabalhe-conosco', element: <TrabalheConosco /> },
      { path: '/contato', element: <Contato /> },
      { path: '/orcamento', element: <Orcamento /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
