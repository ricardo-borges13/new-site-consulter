import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/PagesHeroOrcamento2.jpg';
import * as S from './Orcamento.styles';
import { SectionOrcamento } from '../../components/Sections/SectionOrcamento/SectionOrcamento';
import { SectionMapPage } from '../../components/Sections/SectionMap/SectionMapPage/SectionMapPage';
import { SEO } from '../../components/SEO/Seo';

export const Orcamento = () => {
  return (
    <>
      <SEO
        title="Solicitar Orçamento - Consulter Soluções"
        description="Solicite um orçamento personalizado em materiais elétricos, borrachas industriais, acessórios e soluções sob medida para sua operação industrial."
        image="https://www.consultersolucoes.com.br/images/SEO-Orcamento.jpg"
        url="https://www.consultersolucoes.com.br/orcamento"
        keywords="orçamento industrial, solicitar orçamento consulter, materiais elétricos industriais, borrachas industriais"
      />

      <PageHeroSection title={'ORÇAMENTO'} image={image}>
        <S.Container></S.Container>
        <S.Form>
          <SectionOrcamento />
        </S.Form>
        <S.Divider />
      </PageHeroSection>
      <SectionMapPage />
    </>
  );
};
