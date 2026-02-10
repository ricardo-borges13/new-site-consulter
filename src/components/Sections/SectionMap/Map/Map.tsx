import * as S from './Map.styles';

export function Map({ src }: { src: string }) {
  return (
    <S.Container>
      <S.MapWrapper>
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa da empresa"
        />
      </S.MapWrapper>
    </S.Container>
  );
}
