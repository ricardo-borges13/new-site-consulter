import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/Banner-TrabalheConosco.jpg';
import * as S from './TrabalheConosco';

export const TrabalheConosco = () => {
  return (
    <>
      <PageHeroSection title="Trabalhe Conosco" image={image}>
        <S.Container>
          <header>
            <h1>Construa sua trajetória com a Consulter</h1>
            <p>
              Na <strong>Consulter Soluções</strong>, acreditamos que bons
              resultados nascem de pessoas comprometidas, curiosas e dispostas a
              evoluir continuamente. Atuamos no fornecimento de soluções
              industriais em materiais elétricos, borrachas e automação,
              atendendo empresas que exigem qualidade, agilidade e confiança.
            </p>
          </header>

          <section>
            <h2>Nosso ambiente de trabalho</h2>
            <p>
              Trabalhar na Consulter é fazer parte de um time que valoriza a
              troca de conhecimento, o senso de responsabilidade e a busca
              constante por soluções eficientes. Incentivamos a autonomia, o
              aprendizado prático e a participação ativa em projetos que
              impactam diretamente nossos clientes.
            </p>
          </section>

          <section>
            <h2>O que oferecemos</h2>
            <ul>
              <li>
                <strong>Desenvolvimento profissional:</strong> oportunidades de
                aprendizado contínuo e crescimento técnico.
              </li>
              <li>
                <strong>Atuação em diferentes segmentos:</strong> contato direto
                com demandas reais da indústria, ampliando a experiência
                profissional.
              </li>
              <li>
                <strong>Ambiente colaborativo:</strong> valorizamos o respeito,
                a comunicação clara e o trabalho em equipe.
              </li>
              <li>
                <strong>Estrutura organizada:</strong> processos bem definidos e
                foco em eficiência operacional.
              </li>
            </ul>
          </section>

          <section>
            <h2>Perfil que buscamos</h2>
            <p>
              Buscamos profissionais que tenham interesse em atuar no ambiente
              industrial e que compartilhem valores como comprometimento,
              responsabilidade e vontade de aprender.
            </p>
            <ul>
              <li>interesse em soluções industriais e atendimento técnico;</li>
              <li>capacidade de trabalhar em equipe e lidar com desafios;</li>
              <li>postura ética e foco em resultados;</li>
              <li>disposição para evoluir junto com a empresa.</li>
            </ul>
          </section>

          <section>
            <h2>Como participar</h2>
            <p>
              Para se candidatar, envie seu currículo atualizado para
              <strong> consulter@consultersolucoes.com.br</strong> com o assunto
              <em> “Trabalhe na Consulter”</em>.
            </p>
            <p>
              Informe no corpo do e-mail a área de interesse e um breve resumo
              do seu perfil profissional. Caso haja uma oportunidade compatível,
              entraremos em contato para as próximas etapas.
            </p>
          </section>

          <section>
            <h2>Cresça junto com a gente</h2>
            <p>
              Na <strong>Consulter Soluções</strong>, acreditamos que o
              crescimento da empresa está diretamente ligado ao crescimento das
              pessoas. Se você busca desafios, aprendizado e um ambiente onde
              seu trabalho faz a diferença, queremos conhecer você.
            </p>
          </section>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
