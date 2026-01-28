import * as S from './SectionMapHome.styles';
import { Map } from '../Map/Map';
import { MapPin } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

type GoogleMapConfig = {
  MAP_SRC: string;
  href: string;
};

export const SectionMapHome = () => {
  const [mapConfig, setMapConfig] = useState<GoogleMapConfig | null>(null);

  useEffect(() => {
    fetch('/googleMap.json')
      .then(res => res.json())
      .then(data => setMapConfig(data))
      .catch(err => console.error('Erro ao carregar mapa:', err));
  }, []);

  if (!mapConfig) return null;

  return (
    <S.Wrapper>
      <S.Container>
        <header>
          <h2>Nossa Localização</h2>
          <p>
            Estamos estrategicamente localizados em Belo Horizonte – MG,
            com fácil acesso para clientes e parceiros.
          </p>
        </header>

        <Map src={mapConfig.MAP_SRC} />

        <a
          href={mapConfig.href}
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
};
