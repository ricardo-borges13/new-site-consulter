import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/PagesHeroBorracha.jpg';
import * as S from './Borrachas.styles.ts';
import { ProductCategory } from '../../components/ProductCategory/ProductCategory.tsx';
import { dataProductRubber } from './dataProductRubber.ts';
import { SEO } from '../../components/SEO/Seo.tsx';

export const Borrachas = () => {
  return (
    <>
      <SEO
        title="Borrachas Industriais - Consulter Soluções"
        description="Borrachas industriais para vedação, condução, proteção e aplicações técnicas, com soluções padronizadas ou desenvolvidas sob medida."
        image="https://www.consultersolucoes.com.br/images/SEO-Borrachas.jpg"
        url="https://www.consultersolucoes.com.br/borrachas-industriais"
        keywords="borrachas industriais, vedação industrial, mangueiras, correias, lençóis de borracha"
      />

      <PageHeroSection
        title={'Borrachas Industriais'}
        subTitle="Soluções em borracha para vedação, condução,
proteção e aplicações técnicas industriais."
        image={image}
      >
        <S.Container>
          <header>
            <p>
              A linha de <strong>Borrachas Industriais</strong> da{' '}
              <strong>Consulter Soluções </strong>
              atende aplicações que exigem <strong>resistência mecânica</strong>
              , <strong>vedação eficiente </strong>e{' '}
              <strong>desempenho contínuo </strong> em ambientes industriais
              severos.
            </p>
            <p>
              Trabalhamos com soluções <strong>padronizadas</strong> e também
              com <strong>desenvolvimento sob medida</strong>, conforme{' '}
              <strong>
                desenho técnico, amostra ou necessidade do processo
              </strong>
              .
            </p>
          </header>
        </S.Container>

        <S.ContainerProduct>
          {dataProductRubber.map(category => (
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
