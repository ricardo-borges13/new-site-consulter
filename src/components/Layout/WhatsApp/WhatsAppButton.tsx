import * as S from './WhatsAppButton.styles';
import { FaWhatsapp } from 'react-icons/fa';

type WhatsAppButtonProps = {
  phone: string; //
  message?: string;
};

export const WhatsAppButton = ({ phone, message }: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <S.Container href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </S.Container>
  );
};
