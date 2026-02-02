import { PageHeroSection } from '../../components/Sections/PageHeroSection/PageHeroSection';
import image from '../../assets/images/PagesHeroAcessorios.jpg';
import { dataAcessoriosManut } from './dataAcessoriosManut';
import { ProductCategory } from '../../components/ProductCategory/ProductCategory';
import * as S from './AcessoriosManutencao.styles';
export const AcessoriosManutencao = () => {
  return (
    <>
      <PageHeroSection
        title={'Acessórios para Manutenção'}
        subTitle={
          'Soluções essenciais para suporte, montagem, reparo e eficiência operacional em ambientes industriais.'
        }
        image={image}
      >
        <S.Container>
          <header>
            <p>
              A linha de <strong>Acessórios para Manutenção Industrial</strong>{' '}
              da <strong>Consulter Soluções</strong> reúne itens fundamentais
              para garantir{' '}
              <strong>eficiência, segurança e continuidade operacional</strong>{' '}
              em diferentes processos industriais.
            </p>
            <p>
              Atendemos demandas de{' '}
              <strong>manutenção corretiva, preventiva e preditiva</strong>,
              fornecendo acessórios confiáveis para{' '}
              <strong>suporte, fixação, vedação e montagem</strong>, sempre
              alinhados às necessidades técnicas de cada aplicação.
            </p>
          </header>
        </S.Container>

        <S.ContainerProduct>
          {dataAcessoriosManut.map(category => (
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
