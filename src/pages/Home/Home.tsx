import { useLocation, useNavigate } from 'react-router-dom';
import { sobreData, productSectionData } from './Home.data';
import { Hero } from '../../components/Sections/Hero/hero';
import { SectionInfo } from '../../components/Sections/SectionInfo/SectionInfo';
import { SectionProduct } from '../../components/Sections/SectionProduct/SectionProduct';
import { ClientsCarousel } from '../../components/Sections/Carousel/ClientsCarousel/ClientsCarousel';
import { SectionCarousel } from '../../components/Sections/Carousel/SectionCarousel/SectionCarousel';
import { SectionMapHome } from '../../components/Sections/SectionMap/SectionMapHome/SectionMapHome';
import { CTASection } from '../../components/Sections/CTASection/CTASection';
import { useEffect, useCallback } from 'react'; // Import useCallback
import { SEO } from '../../components/SEO/Seo';
import heroBg from '../../assets/images/BannerPrincipal-Consulter.jpg';

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'produtos') {
      const section = document.getElementById('produtos');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Memoize event handlers with useCallback
  const handlePrimaryClick = useCallback(() => {
    navigate('/orcamento');
  }, [navigate]);

  const handleSecondaryClick = useCallback(() => {
    navigate('/contato');
  }, [navigate]);

  return (
    <>
      <SEO
        title="Consulter Soluções | Materiais Elétricos, Borrachas Industriais e Soluções Industriais"
        description="A Consulter Soluções oferece materiais elétricos, borrachas industriais, acessórios e soluções industriais sob medida, atendendo diversos segmentos da indústria com qualidade, agilidade e confiabilidade."
        image="https://www.consultersolucoes.com.br/images/SEO-Home.jpg"
        url="https://www.consultersolucoes.com.br/"
        keywords="consulter soluções, materiais elétricos industriais, borrachas industriais, acessórios industriais, soluções industriais, indústria brasileira"
      />

      <Hero
        title="Soluções industriais em borrachas e materiais elétricos"
        subtitle="Atendendo indústrias com qualidade, agilidade e confiança"
        primaryButtonText="Solicitar Orçamento"
        image = {heroBg}
        secondaryButtonText="Fale com um especialista"
        onPrimaryClick={handlePrimaryClick} // Use memoized handler
        onSecondaryClick={handleSecondaryClick} // Use memoized handler
      />

      <SectionInfo {...sobreData} />

      <section id="produtos">
        <SectionProduct {...productSectionData} />
      </section>
      <CTASection />

      <SectionCarousel title="Clientes Atendidos">
        <ClientsCarousel />
      </SectionCarousel>
      <SectionMapHome />
    </>
  );
};
