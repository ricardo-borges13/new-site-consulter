import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/PagesHeroEletrica.jpg';
import * as S from './Eletrica.styles';
import { dataProductEletric } from './dataProductEletric';
import { ProductCategory } from '../../components/ProductCategory/ProductCategory';
import { SEO } from '../../components/SEO/Seo';

export const Eletrica = () => {
  return (
    <>
      <SEO
        title="Material Elétrico Industrial - Consulter Soluções"
        description="Linha completa de materiais elétricos industriais para automação, infraestrutura, painéis, comandos elétricos e manutenção industrial."
        image="https://www.consultersolucoes.com.br/images/SEO-MaterialEletrico.jpg"
        url="https://www.consultersolucoes.com.br/material-eletrico"
        keywords="material elétrico industrial, componentes elétricos, automação industrial, infraestrutura elétrica"
      />

      <PageHeroSection
        title={'Materiais Elétrico'}
        subTitle="Soluções elétricas para automação, infraestrutura, segurança e aplicações industriais."
        image={image}
      >
        <S.Container>
          <header>
            <p>
              A linha de <strong>Materiais Elétricos </strong>da{' '}
              <strong>Consulter Soluções </strong> atende aplicações industriais
              que exigem{' '}
              <strong>segurança, confiabilidade e desempenho contínuo</strong>{' '}
              em sistemas elétricos e de automação.
            </p>
            <p>
              Fornecemos soluções completas para{' '}
              <strong>
                infraestrutura elétrica, manutenção industrial e projetos
                técnicos
              </strong>
              , trabalhando com produtos padronizados e também com fornecimento
              conforme{' '}
              <strong>
                especificação técnica, desenho ou necessidade operacional
              </strong>
              .
            </p>
          </header>
        </S.Container>
        <S.ContainerProduct>
          {dataProductEletric.map(category => (
            <ProductCategory
              key={category.title}
              image={category.image}
              title={category.title}
              items={category.items}
            />
          ))}
        </S.ContainerProduct>
      </PageHeroSection>
    </>
  );
};
