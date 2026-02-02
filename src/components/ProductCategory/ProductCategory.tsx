import * as S from './ProductCategory.styles';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MotionReveal } from '../Motion/MotionReveal/MotionReveal';

type ProductCategoryProps = {
  image: string;
  title: string;
  items: string[];
};

export const ProductCategory = ({
  image,
  title,
  items,
}: ProductCategoryProps) => {
  const navigate = useNavigate();

  return (
    <S.Card>
      <S.Header>
        <img src={image} alt={title} />
        <S.CardHeader>
          <h3>{title}</h3>
        </S.CardHeader>
      </S.Header>
      <S.List>
        <MotionReveal delay={0.8}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </MotionReveal>
      </S.List>
      <S.Action onClick={() => navigate('/orcamento')}>
        Solicitar orçamento
        <ArrowRight size={16} />
      </S.Action>
    </S.Card>
  );
};
