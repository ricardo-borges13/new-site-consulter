import * as S from './SectionMapPage.styles';
import { MapPin } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Map } from '../Map/Map.tsx';
import { useEffect, useState } from 'react';

type GoogleMapConfig = {
  MAP_SRC: string;
  href: string;
};

export const SectionMapPage = () => {
  const [mapConfig, setMapConfig] = useState<GoogleMapConfig | null>(null);

  useEffect(() => {
    fetch('/googleMap.json')
      .then(res => res.json())
      .then(data => setMapConfig(data))
      .catch(err => console.error('Erro ao carregar mapa:', err));
  }, []);

  if (!mapConfig) return null;

  return (
    <>
      <S.ContainerMap>
        <header>
          <h2>Nossa Localização</h2>
          <p>
            Estamos em Belo Horizonte – MG, com fácil acesso para atendimento
            regional e retirada de materiais quando necessário.
          </p>
        </header>
        <Map src={mapConfig.MAP_SRC} />
        <a
          href={mapConfig.href}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          <S.MapLink>
            <MapPin className="map-link" size={16} />
            Ver rotas no Google Maps
            <ArrowRight size={14} />
          </S.MapLink>
        </a>
      </S.ContainerMap>
    </>
  );
};
