import * as S from './SectionOrcamento.styles';
import { FormOrcamento } from '../../Form/FormOrcamento/FormOrcamento';

export const SectionOrcamento = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Header>
          <h2>Solicite um Orçamento</h2>
          <p>
            Informe os dados abaixo para que nossa equipe possa entender sua
            necessidade e retornar com uma proposta personalizada.
          </p>
        </S.Header>

       
          <FormOrcamento />

      </S.Container>
    </S.Section>
  );
};
