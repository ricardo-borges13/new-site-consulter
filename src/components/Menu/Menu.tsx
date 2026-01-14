import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from './menuData';
import { Nav, MenuItem, MenuLink, Submenu, SubmenuItem } from './Menu.styles';

type MenuProps = {
  onLinkClick?: () => void;
};

export const Menu = ({ onLinkClick }: MenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenuMobile, setOpenSubmenuMobile] = useState<number | null>(
    null
  );

  // Detecta se é mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 920);
    handleResize(); // roda uma vez ao iniciar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleMenuClick(
    e: React.MouseEvent,
    itemId: number,
    itemTitle: string
  ) {
    if (isMobile) {
      // 👉 No mobile, abre/fecha apenas o submenu desse item
      if (itemTitle === 'Produtos' || itemTitle === 'Eventos') {
        e.preventDefault();
        setOpenSubmenuMobile(prev => (prev === itemId ? null : itemId));
      } else {
        // 👉 Se não tiver submenu, permite navegação normal
        onLinkClick?.();
      }
    } else {
      // 👉 Desktop
      if (itemTitle === 'Produtos') {
        e.preventDefault();
        // rola até a seção de produtos
        if (location.pathname === '/') {
          const section = document.getElementById('produtos');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate('/', { state: { scrollTo: 'produtos' } });
        }
        onLinkClick?.();
      } else if (itemTitle === 'Eventos') {
        // 👉 No desktop, não faz nada (apenas mantém hover do submenu)
        e.preventDefault();
        return;
      } else {
        // 👉 Outros menus — permitem roteamento normal
        onLinkClick?.();
      }
    }
  }

  function handleMouseEnter(id: number) {
    if (!isMobile) setOpenMenu(id);
  }

  function handleMouseLeave() {
    if (!isMobile) setOpenMenu(null);
  }

  function handleSubmenuClick(path: string) {
    setOpenMenu(null);
    setOpenSubmenuMobile(null);
    navigate(path);
    onLinkClick?.();
  }

  return (
    <Nav>
      {menuItems.map(item => (
        <MenuItem
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <MenuLink
            to={item.path ?? '#'}
            onClick={e => handleMenuClick(e, item.id, item.title)}
          >
            {item.title}
          </MenuLink>

          {item.submenu && (
            <Submenu
              $isOpen={
                (!isMobile && openMenu === item.id) ||
                (isMobile && openSubmenuMobile === item.id)
              }
            >
              {item.submenu.map((sub, index) => (
                <SubmenuItem key={index}>
                  <MenuLink
                    to={sub.path}
                    onClick={() => handleSubmenuClick(sub.path)}
                  >
                    {sub.title}
                  </MenuLink>
                </SubmenuItem>
              ))}
            </Submenu>
          )}
        </MenuItem>
      ))}
    </Nav>
  );
};
