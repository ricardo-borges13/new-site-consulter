import { Outlet } from 'react-router-dom';
import * as S from './Layout.styles';

import { ScrollToTop } from './ScrollToTop/ScrollToTop';
import { HeaderMain, HeaderTop, contactData } from './Header';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <S.LayoutWrapper>
      <ScrollToTop />
      <HeaderTop {...contactData} />
      <HeaderMain />

      <S.MainContent>
        <Outlet />
      </S.MainContent>
      <Footer {...contactData} />
    </S.LayoutWrapper>
  );
};
