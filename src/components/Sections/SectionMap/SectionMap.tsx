import * as S from './SectionMap.styles';
import { Map } from './Map/Map';
import { MapPin } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.995883219508!2d-43.98691072395563!3d-19.96667538143002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6962c7e5e1ac1%3A0xb533cca56954e97f!2zQ09OU1VMVEVSIFNPTFXDh8OVRVM!5e0!3m2!1spt-BR!2sbr!4v1768956474522!5m2!1spt-BR!2sbr';
export const SectionMap = () => (
  <S.Wrapper>
    <S.Container>
      <header>
        <h2>Nossa Localização</h2>
        <span>
          A Consulter Soluções está estrategicamente localizada em Belo
          Horizonte, com fácil acesso para clientes e parceiros. Visite-nos ou
          fale conosco por um de nossos canais de atendimento.
        </span>
      </header>

      <Map src={MAP_SRC} />
      <a
        href="https://maps.app.goo.gl/4dYJMt12GoXB3F3c9"
        target="_blank"
        rel="noopener noreferrer"
        className="map-link"
      >
        <MapPin size={16} />
        Ver rotas no Google Maps
        <ArrowRight size={14} />
      </a>
    </S.Container>
  </S.Wrapper>
);
