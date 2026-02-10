import { Menu } from '../Menu/Menu';
import * as S from './HeaderMain.styles';
import logo from '../../../assets/images/Logo-Header2.png';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { CustomButton } from '../../CustomButton/CustomButton';

export const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // muda o estado ao rolar
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.HeaderContainer $isScrolled={isScrolled}>
      <S.HeaderContent>
        <Link to="/">
          <S.Image src={logo} alt="Logo" $isScrolled={isScrolled} />
        </Link>

        <S.MenuWrapper>
          <S.MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </S.MenuToggle>

          <S.MenuContainer $open={menuOpen}>
            <Menu onLinkClick={() => setMenuOpen(false)} />
          </S.MenuContainer>

          <CustomButton
            text="Orçamento"
            variant="headerMain"
            paddingHeight="small"
            type="button"
            onClick={() => navigate('/orcamento')}
          >
            Orçamento
            <FaAngleRight size={16} className="arrow" />
          </CustomButton>

        </S.MenuWrapper>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
