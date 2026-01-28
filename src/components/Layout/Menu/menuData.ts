export const menuItems = [
  { id: 1, title: 'Home', path: '/', showInFooter: true },
  { id: 2, title: 'Quem somos', path: '/quemsomos', showInFooter: true },
  {
    id: 3,
    title: 'Produtos',
    path: '/produtos',
    showInFooter: false,
    submenu: [
      { title: 'Materiais Elétricos', path: '/produtos/eletricos' },
      {
        title: 'Borrachas Industriais',
        path: '/produtos/borrachas',
      },
      { title: 'Acessórios para Manutenção', path: '/produtos/acessorios' },
      { title: 'Automação', path: '/produtos/automacao' },
    ],
  },

  {
    id: 4,
    title: 'Trabalhe Conosco',
    path: '/trabalheconosco',
    showInFooter: true,
  },
   {
    id: 5,
    title: 'Contato',
    path: '/contato',
    showInFooter: true,
  },
];
