import * as S from './CardProduct.styles';

type CardProductProps = {
  title: string;
  description: string;
  images: string;
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
          <S.Title>{title}</S.Title>
        </S.IconTitle>

        <p>{description}</p>

        <S.Footer>
          <S.LinkButton onClick={onButtonClick}>{buttonText} &gt;</S.LinkButton>

          <S.ActionButton onClick={onButtonClick}>→</S.ActionButton>
        </S.Footer>
      </S.Content>

      <S.ImageArea>
        <img src={images} alt={`${title} }`} />
      </S.ImageArea>
    </S.Card>
  );
};
