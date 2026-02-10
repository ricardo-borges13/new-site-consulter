import * as S from './SectionInfo.styles';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../CustomButton/CustomButton';
import { MotionReveal } from '../../Motion/MotionReveal/MotionReveal';

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
        <MotionReveal delay={0.2}>
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {buttonText && (
            <CustomButton
              onClick={() => navigate(`${path}`)}
              text={buttonText}
              variant="primary"
            />
          )}
        </MotionReveal>
      </S.TextArea>
      <MotionReveal delay={0.5}>
        <S.ImagesArea>
          <img src={image1} alt="" />
          {image2 && <img src={image2} alt="" />}
        </S.ImagesArea>
      </MotionReveal>
    </S.Container>
  );
};
