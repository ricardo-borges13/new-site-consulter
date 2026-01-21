import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as S from './ClientsCarousel.styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import csn from '../../assets/images/clientes/CSN.png';
import usiminas from '../../assets/images/clientes/USIMINAS.png';
import arcelor from '../../assets/images/clientes/ARCELORMITTAL.png';
import belgo from '../../assets/images/clientes/Belgo.png';
import alvoar from '../../assets/images/clientes/alvoar-lacteos.png';
import magnesita from '../../assets/images/clientes/Magnesita.png';
import petrobras from '../../assets/images/clientes/Petrobras.png';
import vallourec from '../../assets/images/clientes/Vallourec.png';
import gerdau from '../../assets/images/clientes/Gerdau.png';


  const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <S.ArrowButton $side="left" onClick={onClick}>
      <ChevronLeft />
    </S.ArrowButton>
  );

  const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
    <S.ArrowButton $side="right" onClick={onClick}>
      <ChevronRight />
    </S.ArrowButton>
  );


// Componente principal
export const ClientsCarousel: React.FC = () => {
  const logos = [
    { src: csn, alt: 'CSN' },
    { src: usiminas, alt: 'Usiminas' },
    { src: arcelor, alt: 'ArcelorMittal' },
    { src: belgo, alt: 'Belgo' },
    { src: alvoar, alt: 'Alvoar' },
    { src: magnesita, alt: 'Magnesita' },
    { src: petrobras, alt: 'Petrobras' },
    { src: vallourec, alt: 'Vallourec' },
    { src: gerdau, alt: 'Gerdau' },
  ];


  return (
    <S.CarouselContainer>
      <Carousel
        responsive={S.responsive}
        infinite
        autoPlay
        autoPlaySpeed={3500}
        arrows={true} // habilita as setas padrão
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {logos.map(logo => (
          <S.Card key={logo.alt}>
            <img src={logo.src} alt={logo.alt} />
          </S.Card>
        ))}
      </Carousel>
    </S.CarouselContainer>
  );
};
