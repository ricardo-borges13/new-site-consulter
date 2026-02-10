import imageProduct1 from '../../assets/images/Borrachas.png';
import imageProduct2 from '../../assets/images/eletrica.png';
import imageProduct3 from '../../assets/images/Acessorios.png';
import imageProduct4 from '../../assets/images/Industria.png';

import image1 from '../../assets/images/Sobre-Consulter-New1-1.jpg';
import image2 from '../../assets/images/Sobre-Consulter-New2-1.jpg';
import type { SectionInfoProps } from '../../components/Sections/SectionInfo/SectionInfo';

export const sobreData: SectionInfoProps = {
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

export const productSectionData = {
  title: 'Nossas linhas de produto',
  image1: imageProduct1,
  image2: imageProduct2,
  image3: imageProduct3,
  image4: imageProduct4,
};
