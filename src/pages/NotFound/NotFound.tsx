import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import image from '../../assets/images/PagesHero-Error.jpg';
import * as S from './NotFound.styles';
import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import { SEO } from '../../components/SEO/Seo';

export const NotFound = () => {
  return (
    <>
      <SEO
        title="Página não encontrada - Consulter Soluções"
        description="A página que você está tentando acessar não existe. Retorne à página inicial da JPM e encontre soluções em materiais elétricos e borrachas industriais."
        image="https://www.consultersolucoes.com.br/images/error.jpg"
        url="https://www.consultersolucoes.com.br/404"
        keywords="erro 404, página não encontrada, JPM, materiais elétricos, borrachas industriais"
        noindex={true}
        nofollow={true}
      />
      <PageHeroSection title="PÁGINA NÃO ENCONTRADA" image={image}>
        <S.Container>
          <S.Icon>
            <AlertTriangle size="100%" />
          </S.Icon>
          <S.Title>404</S.Title>
          <S.Subtitle>Página não encontrada</S.Subtitle>
          <S.Message>
            O endereço que você tentou acessar não existe ou foi movido.
            Verifique o link ou volte à página inicial.
          </S.Message>
          <S.HomeLink as={Link} to="/">
            Voltar para a Home
          </S.HomeLink>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
