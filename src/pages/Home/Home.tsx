import { useNavigate } from 'react-router-dom';
import { Hero } from '../../components/Hero/hero';

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
    </>
  );
};
