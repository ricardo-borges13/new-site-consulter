import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/PagesHero-Contato.jpg';
import * as S from './Contato.styles';
import { SectionsContactus } from '../../components/Sections/SectionsContactUs/SectionsContactUs';
import { contactData } from '../../components/Layout/Header';
import { SectionMapPage } from '../../components/Sections/SectionMap/SectionMapPage/SectionMapPage';

export const Contato = () => {
  return (
    <>
      <PageHeroSection title={'ENTRE EM CONTATO'} image={image}>
        <S.Container>
          <header>
            <h2>Envie sua Mensagem</h2>
            <p>
              Tem alguma dúvida, precisa de um orçamento ou deseja falar com
              nosso time? Utilize o formulário ou escolha um de nossos canais de
              atendimento. Estamos prontos para atender você.
            </p>
          </header>
        </S.Container>
        <S.Form>
          <SectionsContactus {...contactData} />
        </S.Form>
        <S.Divider />
        <SectionMapPage />
      </PageHeroSection>
    </>
  );
};
