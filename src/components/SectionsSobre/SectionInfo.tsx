import * as S from './SectionInfo.styles';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

export type SectionInfoProps = {
  title: string;
  description: string;
  image1: string;
  image2?: string;
  buttonText?: string;
  path?: string;
};

export const SectionInfo = ({
  title,
  description,
  image1,
  image2,
  buttonText,
  path,
}: SectionInfoProps) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.TextArea>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        {buttonText && (
          <Button
            onClick={() => navigate(`${path}`)}
            text={buttonText}
            variant="primary"
          />
        )}
      </S.TextArea>

      <S.ImagesArea>
        <img src={image1} alt="" />
        {image2 && <img src={image2} alt="" />}
      </S.ImagesArea>
    </S.Container>
  );
};
