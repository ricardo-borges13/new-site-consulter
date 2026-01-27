import { useForm } from 'react-hook-form';
import * as S from './FormOrcamento.styles';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '../../components/Button/Button';

type FormOrcamentoInputs = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  tipoNecessidade: string;
  produtoServico?: string;
  quantidade?: string;
  prazo?: string;
  observacoes?: string;
};

export const FormOrcamento = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormOrcamentoInputs>();

  const onSubmitMock = async (_data: FormOrcamentoInputs) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(
        'Solicitação de orçamento enviada com sucesso! (MODO TESTE)',
        { duration: 6000 }
      );
      reset();
    } catch {
      toast.error('Erro ao enviar solicitação. (MODO TESTE)', {
        duration: 4000,
      });
    }
  };

  const onSubmitReal = async (data: FormOrcamentoInputs) => {
    try {
      const response = await fetch('https://formspree.io/f/mldpvpbd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          'Mensagem enviada com sucesso! 🎉 Em breve entraremos em contato',
          { duration: 5000 }
        );
        reset();
      } else {
        toast.error('Erro ao enviar. Tente novamente.', { duration: 4000 });
      }
    } catch (error) {
      toast.error('Erro de conexão. Tente novamente mais tarde.', {
        duration: 4000,
      });
      console.error(error);
    }
  };

  //Verifica qual ambiente o código está rodando (teste ou produção)
  const isDev = import.meta.env.DEV;
  const submitHandler = isDev ? onSubmitMock : onSubmitReal;

  return (
    <S.FormContainer>
      <Toaster
        containerStyle={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          zIndex: 9999,
        }}
        toastOptions={{
          style: {
            background: '#2a2a2a',
            color: '#fff',
            fontSize: '16px',
            padding: '16px 24px',
            borderRadius: '12px',
            maxWidth: '400px',
            textAlign: 'center',
          },
        }}
      />

      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Nome e Empresa */}
        <S.FieldGroup>
          <div style={{ flex: 1 }}>
            <label>Nome *</label>
            <S.Input {...register('nome', { required: 'Campo obrigatório' })} />
            {errors.nome && (
              <S.ErrorMessage>{errors.nome.message}</S.ErrorMessage>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <label>Empresa *</label>
            <S.Input
              {...register('empresa', { required: 'Campo obrigatório' })}
            />
            {errors.empresa && (
              <S.ErrorMessage>{errors.empresa.message}</S.ErrorMessage>
            )}
          </div>
        </S.FieldGroup>

        {/* Telefone e Email */}
        <S.FieldGroup>
          <div style={{ flex: 1 }}>
            <label>Telefone *</label>
            <S.Input
              {...register('telefone', { required: 'Campo obrigatório' })}
            />
            {errors.telefone && (
              <S.ErrorMessage>{errors.telefone.message}</S.ErrorMessage>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <label>E-mail *</label>
            <S.Input
              type="email"
              {...register('email', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail inválido.',
                },
              })}
            />
            {errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
          </div>
        </S.FieldGroup>

        {/* Tipo de necessidade */}
        <S.Assunto>
          <label>Tipo de necessidade *</label>
          <S.Input
            placeholder="Ex: Materiais elétricos, Borrachas, Automação"
            {...register('tipoNecessidade', { required: 'Campo obrigatório' })}
          />
          {errors.tipoNecessidade && (
              <S.ErrorMessage>{errors.tipoNecessidade.message}</S.ErrorMessage>
            )}
        </S.Assunto>

        {/* Produto / Serviço */}
        <S.Assunto>
          <label>Produto ou serviço</label>
          <S.Input {...register('produtoServico')} />
        </S.Assunto>

        {/* Quantidade e Prazo */}
        <S.FieldGroup>
          <div style={{ flex: 1 }}>
            <label>Quantidade estimada</label>
            <S.Input {...register('quantidade')} />
          </div>

          <div style={{ flex: 1 }}>
            <label>Prazo desejado</label>
            <S.Input {...register('prazo')} />
          </div>
        </S.FieldGroup>

        {/* Observações */}
        <S.Mensagem>
          <label>Observações técnicas</label>
          <S.TextArea rows={4} {...register('observacoes')} />
        </S.Mensagem>

        <Button
          text="Solicitar Orçamento"
          variant="secondary"
          paddingHeight="large"
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
        />
      </form>
    </S.FormContainer>
  );
};
