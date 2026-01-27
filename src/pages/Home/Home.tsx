import { useNavigate } from 'react-router-dom';
import { sobreData, productSectionData } from './Home.data';
import { Hero } from '../../components/Sections/Hero/hero';
import { SectionInfo } from '../../components/Sections/SectionInfo/SectionInfo';
import { SectionProduct } from '../../components/Sections/SectionProduct/SectionProduct';
import { ClientsCarousel } from '../../components/Sections/Carousel/ClientsCarousel/ClientsCarousel';
import { SectionCarousel } from '../../components/Sections/Carousel/SectionCarousel/SectionCarousel';

import { SectionMap } from '../../components/Sections/SectionMap/SectionMap';
import { CTASection } from '../../components/Sections/CTASection/CTASection';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero
        title="Soluções industriais em borrachas e materiais elétricos"
        subtitle="Atendendo indústrias com qualidade, agilidade e confiança"
        primaryButtonText="Fale com um especialista"
        secondaryButtonText="Solicitar Orçamento"
        onPrimaryClick={() => navigate('/contato')}
        onSecondaryClick={() => navigate('/empresa')}
      />

        <SectionInfo {...sobreData} />

      <SectionProduct {...productSectionData} />

        <CTASection />

      <SectionCarousel title="Clientes Atendidos">
        <ClientsCarousel />
      </SectionCarousel>
      <SectionMap />
    </>
  );
};
