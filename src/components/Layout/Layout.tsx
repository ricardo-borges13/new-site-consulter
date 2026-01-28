import { Outlet } from 'react-router-dom';
import * as S from './Layout.styles';
import { ScrollToTop } from './ScrollToTop/ScrollToTop';
import { HeaderMain, HeaderTop, contactData } from './Header';
import { Footer } from './Footer/Footer';
import { useEffect, useState } from 'react';
import { WhatsAppButton } from './WhatsApp/WhatsAppButton';

export const Layout = () => {
const [whatsApp, setWhatsApp] = useState<{
    phone?: string;
    message?: string;
  }>({});

  useEffect(() => {
    fetch('/whatsApp.json')
      .then(res => res.json())
      .then(data => setWhatsApp(data))
      .catch(err => console.error('Erro ao carregar WhatsApp config:', err));
  }, []);


  return (
    <S.LayoutWrapper>
      <ScrollToTop />
      <HeaderTop {...contactData} />
      <HeaderMain />

      <S.MainContent>
        <Outlet />
      </S.MainContent>

     {whatsApp.phone && (
        <WhatsAppButton
          phone={whatsApp.phone}
          message={whatsApp.message || ''}
        />
      )}

      <Footer {...contactData} />
    </S.LayoutWrapper>
  );
};
