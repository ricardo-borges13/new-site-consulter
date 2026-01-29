import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/Banner-TrabalheConosco.jpg';
import * as S from './Eletrica.styles';
import { dataProductEletric } from './dataProductEletric';
import { ProductCategory } from '../../components/ProductCategory/ProductCategory';

export const Eletrica = () => {
  return (
    <>
      <PageHeroSection title={'Materiais Elétrico'} image={image}>
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
