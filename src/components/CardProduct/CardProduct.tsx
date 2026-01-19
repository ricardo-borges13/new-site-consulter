import * as S from './CardProduct.styles';

type CardProductProps = {
  title: string;
  description: string;
  images: string[]; // até 2 imagens
  buttonText: string;
  onButtonClick?: () => void;
};

export const CardProduct = ({
  title,
  description,
  images,
  buttonText,
  onButtonClick,
}: CardProductProps) => {
  return (
    <S.Card>
      <S.Content>
        <S.IconTitle>
          <img src={images[0]} alt={title} />
          <h3>{title}</h3>
        </S.IconTitle>

        <p>{description}</p>

        <S.Footer>
          <S.LinkButton onClick={onButtonClick}>
            {buttonText} &gt;
          </S.LinkButton>

          <S.ActionButton onClick={onButtonClick}>
            →
          </S.ActionButton>
        </S.Footer>
      </S.Content>

      <S.ImageArea>
          <img  src={images[1]} alt={`${title} }`} />
      </S.ImageArea>
    </S.Card>
  );
};
