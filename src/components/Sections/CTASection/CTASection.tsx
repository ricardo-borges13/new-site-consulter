import { useNavigate } from 'react-router-dom';
import * as S from './CTASection.styles';
import { MotionReveal } from '../../Motion/MotionReveal/MotionReveal';

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <S.Section>
      <S.Content>
        <MotionReveal delay={0.6}>
          <span>VAMOS CRESCER JUNTOS</span>
          <h2>
            Experimente inovação e qualidade de verdade com a Consulter Soluções
          </h2>

          <S.Button onClick={() => navigate('/contato')}>
            Entre em contato agora
          </S.Button>
        </MotionReveal>
      </S.Content>
    </S.Section>
  );
};
