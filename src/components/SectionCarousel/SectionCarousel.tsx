import * as S from './SectionCarousel.styles';

type SectionCarouselProps = {
  title: string;
  children: React.ReactNode;
};

export const SectionCarousel = ({ title, children }: SectionCarouselProps) => {
  return (
    <S.SectionWrapper>
      <h2>{title}</h2>
      {children}
    </S.SectionWrapper>
  );
};
