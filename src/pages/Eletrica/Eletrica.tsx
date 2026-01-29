import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/Banner-TrabalheConosco.jpg';
import * as S from './Eletrica.styles';
import { dataProductEletric } from './dataProductEletric';
import { ProductCategory } from '../../components/ProductCategory/ProductCategory';

export const Eletrica = () => {
  return (
    <>
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
