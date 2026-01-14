import { useNavigate } from 'react-router-dom';
import { Hero } from '../../components/Hero/hero';
import image1 from '../../assets/images/Sobre-Consulter3.jpg';

import { SectionInfo, type SectionInfoProps } from '../../components/SectionsSobre/SectionInfo';

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
    </>
  );
};
