export const menuItems = [
  { id: 1, title: 'Home', path: '/', showInFooter: true },
  { id: 2, title: 'Quem somos', path: '/quem-somos', showInFooter: true },
  {
    id: 3,
    title: 'Produtos',
    path: '/produtos',
    showInFooter: false,
    submenu: [
      { title: 'Materiais Elétricos', path: '/produtos/material-eletrico' },
      {
        title: 'Borrachas',
        path: '/produtos/borrachas-industriais',
      },
      {
        title: 'Acessórios para Manutenção',
        path: '/produtos/acessorios-industriais',
      },
      { title: 'Soluções Industriais', path: '/produtos/solucoes-industriais' },
    ],
  },

  {
    id: 4,
    title: 'Trabalhe Conosco',
    path: '/trabalhe-conosco',
    showInFooter: true,
  },
  {
    id: 5,
    title: 'Contato',
    path: '/contato',
    showInFooter: true,
  },
];
