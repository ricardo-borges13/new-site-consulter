import * as S from './Hero.styles';
import { motion } from 'framer-motion';
import { Button } from '../../Button/Button';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  image: string;
}

export const Hero = React.memo(
  ({
    title,
    subtitle,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryClick,
    onSecondaryClick,
    image,
  }: HeroProps) => {
    return (
      <S.HeroContainer>
        {/* Imagem real no DOM */}
        <S.BackgroundImage
          src={image}
          alt="Banner principal"
          loading="eager"
          fetchPriority="high"
        />

        {/* Overlay escuro */}
        <S.Overlay />

        <S.HeroContent>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <S.HeroTitle>{title}</S.HeroTitle>
            <S.HeroSubtitle>{subtitle}</S.HeroSubtitle>

            <S.ButtonGroup>
              <Button
                text={primaryButtonText}
                onClick={onPrimaryClick}
                variant="primary"
                paddingHeight="large"
              />
              <Button
                text={secondaryButtonText}
                onClick={onSecondaryClick}
                variant="outline-white"
                paddingHeight="large"
              />
            </S.ButtonGroup>
          </motion.div>
        </S.HeroContent>
      </S.HeroContainer>
    );
  }
);
