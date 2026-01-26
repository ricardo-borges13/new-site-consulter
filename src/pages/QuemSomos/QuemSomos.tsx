import { motion } from 'framer-motion';
import image from '../../assets/images/Banner-TrabalheConosco.jpg';
import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import * as S from './QuemSomos.styles';
import Accordion from 'react-bootstrap/Accordion';

const atuacao = [
  {
    title: 'Atuação',
    content: (
      <>
        A <strong>Consulter Soluções</strong> atua desde 2013 no fornecimento de
        materiais elétricos, borrachas industriais, suprimentos técnicos e
        soluções em automação industrial, atendendo empresas de diferentes
        segmentos da indústria brasileira.
      </>
    ),
  },
  {
    title: 'Mercado Público',
    content: (
      <>
        Também atuamos no fornecimento de materiais por meio de
        <strong> processos licitatórios</strong>, atendendo órgãos públicos em
        todo o território nacional com responsabilidade e transparência.
      </>
    ),
  },
  {
    title: 'Diferenciais',
    content: (
      <>
        Nossa atuação é pautada por{' '}
        <strong>seriedade, eficiência, pontualidade nos prazos</strong> e
        postura proativa no atendimento, sempre buscando soluções que gerem
        valor real para nossos clientes.
      </>
    ),
  },
  {
    title: 'Parceria',
    content: (
      <>
        Mais do que fornecer produtos, buscamos construir
        <strong> parcerias duradouras</strong>, entendendo os desafios de cada
        operação e oferecendo soluções alinhadas às exigências do ambiente
        industrial.
      </>
    ),
  },
];

const MotionCard = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      ease: 'easeOut',
      delay: index * 0.1,
    }}
  >
    {children}
  </motion.div>
);

export const QuemSomos = () => {
  return (
    <>
      <PageHeroSection
        title="Quem somos"
        subTitle="Conheça a Consulter Soluções"
        image={image}
      >
        <S.Container>
          {/* TEXTO INTRODUTÓRIO (VERSÃO REDUZIDA) */}
          <S.Intro>
            <p>
              A <strong>Consulter Soluções</strong> nasceu com o propósito de
              atuar como uma parceira estratégica para empresas que enfrentam
              desafios constantes no ambiente industrial. Desde 2013,
              construímos nossa trajetória com base em relações de confiança,
              compromisso com resultados e entendimento profundo das
              necessidades de cada cliente.
            </p>
            <p>
              Com foco em <strong>qualidade, agilidade e confiabilidade</strong>
              , buscamos compreender as necessidades de cada cliente para
              oferecer soluções alinhadas às exigências do ambiente industrial,
              contribuindo diretamente para a eficiência e continuidade das
              operações.
            </p>
          </S.Intro>

          <S.SectionTitle>Missão, Visão e Valores</S.SectionTitle>
          <S.AccordionWrapper>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missão</Accordion.Header>
                <Accordion.Body>
                  Oferecer soluções industriais com qualidade, agilidade e
                  confiabilidade, atendendo às necessidades técnicas e
                  operacionais de cada cliente.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Visão</Accordion.Header>
                <Accordion.Body>
                  Ser reconhecida como uma empresa referência no fornecimento de
                  soluções industriais, construindo parcerias sólidas e
                  duradouras.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Valores</Accordion.Header>
                <Accordion.Body>
                  Seriedade, ética, eficiência, compromisso com prazos, respeito
                  às pessoas e foco em melhoria contínua.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </S.AccordionWrapper>

          {/* ATUAÇÃO / MERCADO / DIFERENCIAIS / PARCERIA */}
          <S.SectionTitle>Nossa Atuação</S.SectionTitle>
          <S.Grid>
            {atuacao.map((item, index) => (
              <MotionCard key={item.title} index={index}>
                <S.Card>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </S.Card>
              </MotionCard>
            ))}
          </S.Grid>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
