import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/PagesHeroOrcamento2.jpg';
import * as S from './Orcamento.styles';
import { SectionOrcamento } from '../../components/Sections/SectionOrcamento/SectionOrcamento';
import { SectionMapPage } from '../../components/Sections/SectionMap/SectionMapPage/SectionMapPage';

export const Orcamento = () => {
  return (
    <>
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
