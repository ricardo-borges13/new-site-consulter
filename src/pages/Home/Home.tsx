import { useNavigate } from 'react-router-dom';
import { Hero } from '../../components/Hero/hero';
import image1 from '../../assets/images/Sobre-Consulter-New1-1.jpg';
import image2 from '../../assets/images/Sobre-Consulter-New2-1.jpg';
import imageProdouct1 from '../../assets/images/Borrachas.png';
import imageProduct2 from '../../assets/images/eletrica.png';
import imageProduct3 from '../../assets/images/Acessorios.png';
import imageProduct4 from '../../assets/images/Industria.png';
import icone1 from '../../assets/images/icone-tubo-preto.png';
import icone2 from '../../assets/images/icone-raio-preto.png';
import icone3 from '../../assets/images/icone-acessorios.png';
import icone4 from '../../assets/images/icone-paineis-preto.png';
import {
  SectionInfo,
  type SectionInfoProps,
} from '../../components/SectionsSobre/SectionInfo';

import { ProductGroup } from '../../components/ProductGroup/ProdutctGroup';

const sobreData: SectionInfoProps = {
  title: 'Por que escolher a Consulter?',
  description: `
    <p>
      Há mais de <strong>10 anos</strong> fornecendo
      <strong> materiais elétricos, borrachas industriais e automação</strong>
      para os principais segmentos da indústria brasileira.
    </p>
    <p>
      A <strong>Consulter Soluções</strong> é parceira de indústrias
      siderúrgicas, petroquímicas, mineradoras e automotivas, oferecendo
      <strong> qualidade, agilidade e confiança</strong> em cada projeto.
    </p>
  `,
  image1,
  image2,
  buttonText: 'Saiba mais',
  path: '/quem-somos',
};

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
    </>
  );
};
