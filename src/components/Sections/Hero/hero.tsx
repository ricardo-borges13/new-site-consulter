import * as S from './Hero.styles';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const Hero = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps) => {
  return (
    <S.HeroContainer>
      <S.HeroContent>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: 'easeOut',
          }}
        >
          <S.HeroTitle>{title}</S.HeroTitle>
          <S.HeroSubtitle>{subtitle}</S.HeroSubtitle>

          <S.ButtonGroup>
            <S.PrimaryButton onClick={onPrimaryClick}>
              {primaryButtonText}
            </S.PrimaryButton>
            <S.SecondaryButton onClick={onSecondaryClick}>
              {secondaryButtonText}
            </S.SecondaryButton>
          </S.ButtonGroup>
        </motion.div>
      </S.HeroContent>
    </S.HeroContainer>
  );
};
