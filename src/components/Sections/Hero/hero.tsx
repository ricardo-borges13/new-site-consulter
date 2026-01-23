import * as S from './Hero.styles';

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
  onSecondaryClick
}: HeroProps) => {
  return (
    <S.HeroContainer>
      <S.HeroContent>
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
      </S.HeroContent>
    </S.HeroContainer>
  );
};
