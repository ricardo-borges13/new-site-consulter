import { FormContact } from '../../../Form/FormContact/FormContact';
import * as S from './SectionContactUs.styles';
import { MdEmail } from 'react-icons/md';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { FaUserTie } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import type { ContactInfo } from '../../../types/contact';

export const SectionsContactus = ({
  phone,
  phone2,
  phone3,
  nome2,
  nome3,
  email,
}: ContactInfo) => {
  //função para formatar o numero do telefone para colocar no href do <a></a>
  const formatPhoneHref = (value: string) =>
    `tel:${value.replace(/[^\d+]/g, '')}`;

  const contacts = [
    { nome: 'Central', phone, icon: FaPhone },
    { nome: nome2, phone: phone2, icon: FaUserTie },
    { nome: nome3, phone: phone3, icon: FaUser },
  ].filter(item => item.phone); // evita render vazio

  const emailHref = `mailto:${email}`;
  return (
    <S.Container>
      <S.Content>
        <S.InfoArea>
          <h2>Fale Conosco</h2>
          <p>Ficou com alguma dúvida?</p>
          <FaArrowAltCircleRight size={28} className="icon" />

          <div className="contact">
            {contacts.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="contact-item">
                  <Icon className="icon" />

                  <div className="contact-text">
                    {item.nome && (
                      <span className="contact-name">{item.nome}</span>
                    )}

                    <a href={formatPhoneHref(item.phone!)}>{item.phone}</a>
                  </div>
                </div>
              );
            })}

            <div className="contact-item">
              <MdEmail className="icon" />
              <div className="contact-text">
                <a href={emailHref}>{email}</a>
              </div>
            </div>
          </div>
        </S.InfoArea>

        <S.FormWrapper>
          <FormContact />
        </S.FormWrapper>
      </S.Content>
    </S.Container>
  );
};
