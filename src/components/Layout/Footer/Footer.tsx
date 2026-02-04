import * as S from './Footer.styles';
import { Link } from 'react-router-dom';
import { BiSolidPhoneOutgoing } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import logo from '../../../assets/images/Consulter_logo.png';
import { APP_VERSION } from '../../../version';
import type { ContactInfo } from '../../../types/contact';
import { menuItems } from '../Menu/menuData';


export const Footer = ({ phone, phone2, phone3, email }: ContactInfo) => {
  const footerItems = menuItems.filter(item => item.showInFooter);

  const getPhoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

  const emailHref = `mailto:${email}`;

  return (
    <S.FooterContainer>
      <S.FooterTop>
        {/* BRAND */}
        <S.Brand>
          <Link to="/">
            <img src={logo} alt="Consulter Soluções" />
          </Link>
          <p>Soluções que movem a indústria.</p>
        </S.Brand>

        {/* LINKS */}
        <S.Block>
          <h4>Menu</h4>
          <ul>
            {footerItems.map(item => (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/orcamento">Orçamento</Link>
            </li>
          </ul>
        </S.Block>

        <S.Block>
          <h4>Contato</h4>
          <address>
            <span>
              <BiSolidPhoneOutgoing />
              <a href={getPhoneHref(phone)}> {phone}</a>
            </span>

            {phone2 && (
              <span>
                <BiSolidPhoneOutgoing />

                <a href={getPhoneHref(phone2)}>{phone2}</a>
              </span>
            )}
            {phone3 && (
              <span>
                <BiSolidPhoneOutgoing />

                <a href={getPhoneHref(phone3)}>{phone3}</a>
              </span>
            )}

            <span>
              <MdEmail />
              <a href={emailHref}>{email}</a>
            </span>
          </address>
        </S.Block>

        <S.Block>
          <h4>Empresa</h4>
          <address>
            <span>Consulter Soluções</span>
            <span>CNPJ: 01.111.222/0001-01</span>
            <span>
              Rua das Canoas, 1180, Loja 2 Bairro Estrela Dalva do Oriente
            </span>
            <span>Belo Horizonte - MG - CEP: 30580-040 </span>

          </address>
        </S.Block>
      </S.FooterTop>

      <S.FooterBottom>
        <span>
          © {new Date().getFullYear()} Consulter Soluções. Todos os direitos
          reservados.
        </span>
        <small>Versão {APP_VERSION}</small>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};
