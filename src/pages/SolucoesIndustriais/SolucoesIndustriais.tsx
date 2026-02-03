import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/PagesHeroSolucoes.jpg';
import * as S from './SolucoesIndustriais.styles';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../../components/SEO/Seo';

export const SolucoesIndustriais = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Soluções Industriais - Consulter Soluções"
        description="A Consulter Soluções oferece soluções industriais integradas, combinando materiais, produtos e desenvolvimento sob medida para atender demandas técnicas da indústria."
        image="https://www.consultersolucoes.com.br/images/SEO-SolucoesIndustriais.jpg"
        url="https://www.consultersolucoes.com.br/solucoes-industriais"
        keywords="soluções industriais, soluções sob medida, engenharia industrial, consulter soluções"
      />

      <PageHeroSection
        title="Soluções Industriais"
        subTitle="Soluções integradas para atender às demandas técnicas e operacionais da indústria."
        image={image}
      >
        <S.Container>
          {/* Texto institucional */}
          <S.Intro>
            <p>
              A <strong>Consulter Soluções</strong> atua como parceira
              estratégica no desenvolvimento de{' '}
              <strong>soluções industriais personalizadas</strong>, atendendo
              demandas que envolvem materiais elétricos, borrachas industriais,
              acessórios de manutenção e aplicações técnicas específicas.
            </p>

            <p>
              Mais do que fornecer produtos, buscamos compreender o contexto de
              cada operação, avaliando requisitos técnicos, condições de uso e
              objetivos do cliente para indicar soluções que gerem
              <strong>
                {' '}
                segurança, eficiência operacional e confiabilidade{' '}
              </strong>
              nos processos industriais.
            </p>
          </S.Intro>

          {/* Bloco de atuação */}
          <S.Highlight>
            <p>
              Nossa atuação contempla desde o fornecimento de itens padronizados
              até o desenvolvimento sob medida, conforme
              <strong>
                {' '}
                desenho técnico, amostra ou necessidade específica do processo
              </strong>
              , sempre alinhada às exigências do ambiente industrial e às normas
              aplicáveis.
            </p>
          </S.Highlight>

          {/* CTA */}
          <S.CTA>
            <h3>Precisa de uma solução sob medida?</h3>
            <p>
              Solicite um orçamento e fale com nossa equipe técnica para avaliar
              sua necessidade industrial.
            </p>

            <S.Button onClick={() => navigate('/orcamento')}>
              Solicitar orçamento
            </S.Button>
          </S.CTA>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
