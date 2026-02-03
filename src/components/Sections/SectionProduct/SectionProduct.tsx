import { CardProduct } from './CardProduct/CardProduct';
import * as S from './SectionProduct.styles';
import { useNavigate } from 'react-router-dom';

type ProductProps = {
  title: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  icone1: string;
  icone2: string;
  icone3: string;
  icone4: string;
};

export const SectionProduct = ({
  title,
  image1,
  image2,
  image3,
  image4,
  icone1,
  icone2,
  icone3,
  icone4,
}: ProductProps) => {
  const navigate = useNavigate();
  return (
    <S.wrapper>
      <h2>{title}</h2>
      <S.ImagesArea>
        <CardProduct
          title="Borrachas"
          description="Borrachas industriais para vedação, isolamento e aplicações de alta resistência."
          images={[icone1, image1]}
          buttonText="Saiba mais"
          onButtonClick={() => navigate('/produtos/borrachas-industriais')}
        />
        <CardProduct
          title="Material Elétrico"
          description="Componentes elétricos industriais para automação, manutenção e infraestrutura."
          images={[icone2, image2]}
          buttonText="Saiba mais"
          onButtonClick={() => navigate('/produtos/material-eletrico')}
        />
        <CardProduct
          title="Acessórios para Manutenção"
          description="Acessórios industriais para suporte, fixação e montagem de sistemas."
          images={[icone3, image3]}
          buttonText="Saiba mais"
          onButtonClick={() => navigate('/produtos/acessorios-industriais')}
        />
        <CardProduct
          title="Soluções Industriais"
          description="Soluções personalizadas para processos e sistemas industriais."
          images={[icone4, image4]}
          buttonText="Saiba mais"
          onButtonClick={() => navigate('/produtos/solucoes-industriais')}
        />
      </S.ImagesArea>
    </S.wrapper>
  );
};
