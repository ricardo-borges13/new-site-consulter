import { useNavigate } from 'react-router-dom';
import { sobreData } from './Home.data';
import { Hero } from '../../components/Sections/Hero/hero';
import imageProdouct1 from '../../assets/images/Borrachas.png';
import imageProduct2 from '../../assets/images/eletrica.png';
import imageProduct3 from '../../assets/images/Acessorios.png';
import imageProduct4 from '../../assets/images/Industria.png';
import icone1 from '../../assets/images/icone-tubo-preto.png';
import icone2 from '../../assets/images/icone-raio-preto.png';
import icone3 from '../../assets/images/icone-acessorios.png';
import icone4 from '../../assets/images/icone-paineis-preto.png';
import { SectionInfo } from '../../components/Sections/SectionInfo/SectionInfo';
import { ProductGroup } from '../../components/ProductGroup/ProdutctGroup';
// import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';
// import { contactData } from '../../components/Layout/Header';
import { ClientsCarousel } from '../../components/Sections/ClientsCarousel/ClientsCarousel';
import { SectionCarousel } from '../../components/Sections/SectionCarousel/SectionCarousel';

import { SectionMap } from '../../components/Sections/SectionMap/SectionMap';
import { CTASection } from '../../components/Sections/CTASection/CTASection';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero
        title="Soluções industriais em borrachas e materiais elétricos"
        subtitle="Atendendo indústrias com qualidade, agilidade e confiança"
        primaryButtonText="Solicitar orçamento"
        secondaryButtonText="Fale com um especialista"
        onPrimaryClick={() => navigate('/contato')}
        onSecondaryClick={() => navigate('/empresa')}
      />
      <SectionInfo {...sobreData} />

      <ProductGroup
        title="Nossas linhas de produto"
        image1={imageProdouct1}
        image2={imageProduct2}
        image3={imageProduct3}
        image4={imageProduct4}
        icone1={icone1}
        icone2={icone2}
        icone3={icone3}
        icone4={icone4}
      />
       <CTASection />
      {/* <SectionsContactus {...contactData} /> */}

      <SectionCarousel title="Clientes Atendidos">
        <ClientsCarousel />
      </SectionCarousel>
       <SectionMap />
    </>
  );
};
