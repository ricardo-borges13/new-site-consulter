# React + TypeScript + Vite

# Nome do Projeto
Arquivo limpo para iniciar um novo projeto.
Foi criado as pastas mais importantes e já definido um layout no componente e rotas.

## 🚀 Tecnologias
- React 18
- TypeScript
- Vite
- React Router DOM
- Styled-components
- Bootstrap

## 🏷️ Versionamento da Aplicação

O projeto utiliza o número de versão definido no arquivo `package.json` como **fonte única da versão da aplicação**, permitindo que a versão exibida no sistema seja atualizada de forma centralizada.
Essa abordagem facilita manutenção, controle de releases e rastreabilidade de builds.
---

### 📁 Arquivo `src/version.ts`

Foi criado o arquivo `version.ts`, responsável por importar a versão diretamente do `package.json` e disponibilizá-la para toda a aplicação.

Para permitir a importação do arquivo `package.json` dentro do projeto React com TypeScript, foram adicionadas as seguintes opções no arquivo `tsconfig.app.json`:

{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}

### Utilização nos Componentes
A versão da aplicação pode ser utilizada em qualquer componente através da constante APP_VERSION.

Exemplo de uso no componente Footer:

import { APP_VERSION } from '../../version';

<small>Versão {APP_VERSION}</small>

--------------------------------------------------------------------------
## 🎨 Estilos Globais

### Pasta `styles` — arquivo `global.ts`
Utiliza a biblioteca **normalize.css** para padronizar o comportamento dos estilos entre navegadores.

O `GlobalStyle` define:
- Reset e normalização de CSS
- Fonte padrão do projeto
- Cores base
- Configurações globais de layout

Esse arquivo é carregado uma única vez na aplicação.

--------------------------------------------------------------------------

## 🧭 Rotas (`router`)

A pasta `router` é responsável por **centralizar a configuração de rotas da aplicação**, utilizando o React Router (`createBrowserRouter`).

---

### Funcionamento
- Define as rotas públicas do site institucional
- Utiliza um componente de `Layout` para páginas que compartilham estrutura visual comum
- As páginas são renderizadas dentro do `<Outlet />` definido no Layout

---

### Arquivo `AppRoutes.tsx`
- Responsável por mapear os caminhos (`path`) para seus respectivos componentes de página
- Permite organizar rotas com e sem layout
- Facilita a manutenção e expansão da navegação da aplicação

---

### Integração com a aplicação
O roteamento é inicializado no arquivo `App.tsx` através do componente:

<RouterProvider router={router} />

----------------------------------------------------------------------------

## 🧩 Componentes Globais

### Componente `ScrollToTop`
Componente responsável por **resetar o scroll da página ao trocar de rota**.

#### Funcionamento
- Observa a mudança do `pathname` através do `useLocation`
- Executa `window.scrollTo(0, 0)` sempre que a rota muda
- Ele força a página a rolar para o topo quando há mudança de rota.

#### Local de uso
- Importado e utilizado no componente `Layout`
- Afeta todas as páginas que utilizam esse layout

#### Objetivo
- Melhorar a experiência do usuário em navegação SPA
- Evitar que novas páginas carreguem com scroll anterior

------------------------------------------------------------------------------

### Componente `Layout`
Componente responsável por **definir o layout global da aplicação**, envolvendo todas as páginas que compartilham estrutura visual comum.

#### Funcionamento
- Renderiza elementos fixos da aplicação (Header e Footer)
- Utiliza o componente `<Outlet />` do React Router para renderizar o conteúdo dinâmico das páginas
- Permite centralizar comportamentos globais (ex: `ScrollToTop`)

#### Local de Uso
- Importado e utilizado na configuração de rotas (`AppRoutes.tsx`)
- Atua como rota pai para páginas que utilizam layout compartilhado

#### Objetivo
- Evitar duplicação de código (Header/Footer em cada página)
- Garantir consistência visual entre páginas
- Facilitar manutenção e evolução do layout

----------------------------------------------------------------------------------

### Componente `Hero` (Atualizado)

Componente responsável pelo **banner principal (Hero Section)** da página inicial do site.
Apresenta um título de destaque, subtítulo e botões de call-to-action sobre uma imagem de fundo impactante, com foco em conversão e apresentação institucional.

#### Local de Uso
- Importado e utilizado na page Home (`Home.tsx`)

#### Estrutura de Props

```tsx
type HeroProps = {
  title: string;                  // Título principal (obrigatório)
  subtitle: string;               // Subtítulo de apoio (obrigatório)
  primaryButtonText: string;      // Texto do botão principal
  secondaryButtonText: string;    // Texto do botão secundário
  onPrimaryClick?: () => void;    // Ação do botão principal
  onSecondaryClick?: () => void;  // Ação do botão secundário
};

#### 🎨 Características

Responsivo: Adaptado para desktop, tablet e mobile

-Imagem de fundo fixa: Definida no arquivo de styled-components (`Hero.styles.ts`)
-Overlay escuro: Garante legibilidade do texto sobre a imagem
-Botões interativos: Estados de hover e foco para melhor UX
-Tipografia escalável: Ajustes automáticos por breakpoint
-Acessível: Estrutura semântica utilizando <section> e headings adequados

-------------------------------------------------------------------------------

### Componente `SectionInfo` (Atualizado)

Componente responsável por **apresentar informações institucionais sobre a empresa**, utilizado principalmente na página inicial do site.

Exibe um título, uma descrição textual, uma ou duas imagens e, opcionalmente, um botão de ação (“Saiba mais”) que direciona para outra página com mais detalhes.

---

#### Local de Uso
- Importado e utilizado na página Home (`Home.tsx`)

---

#### Estrutura de Props

```tsx
const sobreData: SectionInfoProps = {
  title: 'Por que escolher a Consulter?',   // Título da seção
  description: `Texto com HTML`,            // Descrição (aceita HTML)
  image1,                                   // Imagem principal (obrigatória)
  image2,                                   // Segunda imagem (opcional)
  buttonText: 'Saiba mais',                 // Texto do botão (opcional)
  path: '/quem-somos',                      // Rota de destino (opcional)
};
```

#### Como Usar
1. Crie o objeto de dados (sobreData) no arquivo Home.data.ts, dentro da pasta da página Home.
2. Importe o componente SectionInfo em Home.tsx.
3. Passe as props utilizando spread: `<SectionInfo {...sobreData} />`

#### Responsividade
- **Desktop**: Layout horizontal (texto à esquerda, imagens à direita)
- **Mobile (< 960px)**: Layout vertical (texto em cima, imagens embaixo)
- **Tablets (< 1050px)**: Imagens ficam ocultas

#### Observações
- As props do componente são definidas no arquivo Home.data.ts
- A propriedade description aceita HTML `(ex: <p>, <strong>)`
- Se a prop buttonText não for informada, o botão não será renderizado
- O componente pode ser utilizado com uma ou duas imagens, conforme a necessidade da seção

------------------------------------------------------------------------------
### Componente `CardProduct`
Componente responsável por criar os cards de produtos que são utilizados dentro do componente ProductGroup.
Apresenta um título, descrição, duas imagens (ícone e imagem principal) e dois botões ("Saiba mais" como texto e seta verde "→") que direcionam para a página de detalhes do produto.

#### Local de Uso
- Importado e utilizado no componente ProductGroup (`ProductGroup.tsx`) que está presente na Home (`Home.tsx`).

#### Estrutura de Props
```tsx
{
  title: 'Borrachas',                              // Título do produto
  description: 'Borrachas industriais...',         // Descrição do produto
  images: [icone1, image1],                        // [0] = ícone, [1] = imagem principal
  buttonText: 'Saiba mais',                        // Texto do botão
  onButtonClick: () => navigate('/produtos/borrachas')  // Função ao clicar
}
```

#### Como Usar
1. Importe as imagens no arquivo que usa `ProductGroup`. OBS: O caminho da imagem é na `Home`
2. Passe as props ao chamar o componente:
```tsx
<CardProduct
  title="Borrachas"
  description="Borrachas industriais e pró-indensça..."
  images={[icone1, image1]}
  buttonText="Saiba mais"
  onButtonClick={() => navigate('/produtos/borrachas')}
/>
```

#### Observações
- O array `images` deve ter exatamente 2 imagens: `[ícone, imagemPrincipal]`
- A primeira imagem (`images[0]`) é o ícone que aparece ao lado do título
- A segunda imagem (`images[1]`) é a imagem principal do card
- Os dois botões executam a mesma função `onButtonClick`
- O caminho das imagens é definido na página que importa o `ProductGroup`


------------------------------------------------------------------------------

### Componente `ProductGroup`
Componente responsável por receber os cards do `CardProduct`
Apresenta um título, quatro imagens e quatro ícones que representa as "LINHAS DE PRODUTOS" da empresa representado pelos cards.

Componente responsável por exibir as linhas de produtos da empresa em formato de cards.
Apresenta um título da seção e quatro cards fixos (usando o componente `CardProduct`) que representam as categorias: Borrachas, Material Elétrico, Acessórios e Soluções Industriais.


#### Local de Uso
- Importado e utilizado na page HOME (`Home.tsx`).

#### Estrutura de Props
```tsx
{
  title: 'Nossas linhas de produto',  // Título da seção
  image1: imageProduto1,              // Imagem principal - Borrachas
  image2: imageProduto2,              // Imagem principal - Material Elétrico
  image3: imageProduto3,              // Imagem principal - Acessórios
  image4: imageProduto4,              // Imagem principal - Soluções Industriais
  icone1: iconeBorrachas,             // Ícone - Borrachas
  icone2: iconeEletrico,              // Ícone - Material Elétrico
  icone3: iconeAcessorios,            // Ícone - Acessórios
  icone4: iconeSolucoes,              // Ícone - Soluções Industriais
}
```

#### Como Usar
1. Importe as imagens (ícones e imagens principais) no `Home.tsx`:
```tsx
import imageProduto1 from '@/assets/images/borrachas.jpg';
import icone1 from '@/assets/images/icone-borrachas.svg';
// ... repita para os outros 3 produtos
```

2. Passe as props ao chamar o componente:
```tsx

```
#### Cards Renderizados
O componente renderiza **4 cards fixos** com as seguintes informações:

1. **Borrachas**: "Borrachas industriais para vedação, isolamento e aplicações de alta resistência."
2. **Material Elétrico**: "Componentes elétricos industriais para automação, manutenção e infraestrutura."
3. **Acessórios**: "Acessórios industriais para suporte, fixação e montagem de sistemas."
4. **Soluções Industriais**: "Soluções personalizadas para processos e sistemas industriais."

#### Observações
- O componente recebe apenas as **imagens** via props; os títulos e descrições são fixos no código
- Todos os cards navegam para sua respectiva página (ex: `/produtos/acessorios`) ao clicar (ajustar rotas conforme necessário)
- Cada card usa internamente o componente `CardProduct`
- As imagens são organizadas em pares `[ícone, imagemPrincipal]` antes de serem passadas ao `CardProduct`
- O layout dos cards é controlado pelo `ProductGroup.styles.ts`


-----------------------------------------------------------
## COMPONENTE DE CONTATO

### Componente `FormContact`
Formulário de contato construído com React Hook Form para validação e gerenciamento de estado.

#### Dependências
```bash
npm install react-hook-form react-hot-toast
```

#### Local de Uso
- **Caminho**: `src/components/FormContact/FormContact.tsx`
- **Usado em**: `SectionContactUs`

#### Estrutura de Dados
```typescript
type FormInputs = {
  nome: string;
  empresa: string;
  telefone?: string;
  email: string;
  assunto?: string;
  mensagem: string;
};
```
**Validações implementadas:**
- Nome: obrigatório
- Email: obrigatório + validação de formato
- Assunto: obrigatório
- Mensagem: obrigatória + mínimo de 5 caracteres
- Empresa e Telefone: opcionais


#### Como Usar
- É feito o destruct de register, handleSubmit, reset, formState para o formulário Hook form poder executar as tarefas necessárias:

**React Hook Form - Principais recursos:**

| Hook/Método | Função |
|-------------|--------|
| `register` | Registra e valida campos do formulário |
| `handleSubmit` | Processa o envio após validação |
| `reset` | Limpa todos os campos e erros |
| `formState.errors` | Exibe mensagens de erro por campo |
| `formState.isSubmitting` | Controla estado de carregamento durante envio |

**Fluxo de funcionamento:**
1. Campos são registrados via `register`
2. Usuário preenche o formulário
3. Ao clicar em "Enviar", `handleSubmit` valida os dados
4. Se houver erros, exibe mensagens via `formState.errors`
5. Se válido, executa `onSubmit` com `isSubmitting = true`
6. Exibe toast de sucesso/erro via `react-hot-toast`
7. Após sucesso, executa `reset()` para limpar o formulário

#### Notificações (Toast)
- **Posição**: Centro da tela
- **Estilo**: Dark mode com bordas arredondadas
- **Duração**: 9s (sucesso) / 4s (erro)
- Instalado biblioteca react-hot-toast para personalizar o alert.

#### Integração com Backend
O código atual possui simulação de envio. Para integrar com Formspree (ou outro serviço), descomente a função `onSubmitTeste`:
```typescript
// Trocar onSubmit por onSubmitTeste no handleSubmit
const onSubmitTeste = async (data: FormInputs) => {
  const response = await fetch('https://formspree.io/f/SEU_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  // ... tratamento de resposta
};
```

------------------------------------------------------------------------------------------

### Componente `SectionContacUs`
Seção completa de contato contendo informações de contato (telefones, email) e o formulário `FormContact`.


#### Local de Uso
- **Caminho**: `src/components/SectionContactUs/SectionContactUs.tsx`
- **Usado em**: Página `Home`

#### Props (Interface ContactInfo)
```typescript
export type ContactInfo = {
  phone: string;        // Telefone principal (obrigatório)
  phone2?: string;      // Telefone secundário (opcional)
  phone3?: string;      // Telefone terciário (opcional)
  nome2?: string;       // Nome do contato 2 (opcional)
  nome3?: string;       // Nome do contato 3 (opcional)
  email: string;        // Email (obrigatório)
  text?: string;        // Texto adicional (opcional)
};
```

#### Como Usar
```typescript
import { SectionsContactus } from './components/SectionContactUs/SectionContactUs';
import { contactData } from '../../components/Header';

// Na página Home
<SectionsContactus {...contactData} />

```
- O arquivo `contactData.ts` está dentro da pasta HEADER (componentes) com as informações de telefone, nome, e-mail e etc. Essas informações é enviada para o "header" e "Entre em Contato" (SectionContacus).
- A tipagem de `contactData` fica na pasta global de TYPES `contact.d.ts`:
export type ContactInfo = {
  phone: string;
  phone2?: string;
  phone3?: string;
  nome2? : string;
  nome3? : string;
  email: string;
  text?: string;
};
- As imagens dos ícones é inserido neste componente

#### Funções auxiliares
- É criado uma variável para guardar os valores formatado do telefone, e-mail, nome e icone:
  const formatPhoneHref = (value: string) =>
    `tel:${value.replace(/[^\d+]/g, '')}`;

 **`formatPhoneHref(value: string)`**
- Remove caracteres não numéricos do telefone
- Adiciona prefixo `tel:` para criar link clicável
- Exemplo: `"(11) 9999-9999"` → `"tel:+11999999999"`

**Renderização condicional de contatos:**
```typescript
const contacts = [
  { nome: 'Central', phone, icon: FaPhone },
  { nome: nome2, phone: phone2, icon: FaUserTie },
  { nome: nome3, phone: phone3, icon: FaUser },
].filter(item => item.phone); // Remove itens sem telefone
```
#### Estrutura Visual
```
┌─────────────────────────────────────┐
│  Entre em Contato                   │
│  Ficou com alguma dúvida?           │
│                                     │
│  📞 Central: (XX) XXXX-XXXX         │
│  👔 Nome2: (XX) XXXX-XXXX           │
│  👤 Nome3: (XX) XXXX-XXXX           │
│  ✉️  email@exemplo.com              │
│                                     │
│  [Formulário de Contato]            │
└─────────────────────────────────────┘
```
#### Observações Importantes
- Compartilha `contactData` com o componente `Header`
- Telefones e emails são links clicáveis (facilitam contato em mobile)
- Sistema de filtro evita renderizar campos vazios
- Layout responsivo com grid adaptativo

-----------------------------------------------------------------------------
## Componentes de Carrossel

### `SectionCarousel`
Container wrapper que envolve carrosseis, fornecendo estrutura consistente com título e área de conteúdo.

#### Localização
- **Caminho**: `src/components/SectionCarousel/SectionCarousel.tsx`
- **Usado em**: Página `Home` (envolve o `ClientsCarousel`)

#### Props
```typescript
type SectionCarouselProps = {
  title: string;           // Título da seção
  children: React.ReactNode; // Componente de carrossel a ser renderizado
};
```

#### Como Usar
```typescript
import { SectionCarousel } from './components/SectionCarousel/SectionCarousel';
import { ClientsCarousel } from './components/ClientsCarousel/ClientsCarousel';

<SectionCarousel title="Nossos Clientes">
  <ClientsCarousel />
</SectionCarousel>
```

#### Características
- **Pattern**: Composition (renderiza `children`)
- **Responsabilidade**: Apenas estrutura visual e título
- **Estilização**: Via styled-components (`SectionCarousel.styles`)

#### Estrutura Visual
```
┌─────────────────────────────────────┐
│  [Título da Seção]                  │
│                                     │
│  [Conteúdo do Carrossel]            │
└─────────────────────────────────────┘
```

---

### `ClientsCarousel`
Carrossel responsivo de logos de clientes com navegação automática e manual.

#### Dependências
```bash
npm install react-multi-carousel lucide-react
```

#### Localização
- **Caminho**: `src/components/ClientsCarousel/ClientsCarousel.tsx`
- **Usado em**: Dentro do `SectionCarousel` na página `Home`

#### Estrutura de Dados
```typescript
const logos = [
  { src: string, alt: string }, // Caminho da imagem e texto alternativo
  // ... array com todos os clientes
];
```


#### Funcionalidades

**Configurações do Carrossel:**
```typescript
<Carousel
  responsive={responsive}      // Breakpoints responsivos
  infinite                     // Loop infinito
  autoPlay                     // Rotação automática
  autoPlaySpeed={3500}         // 3.5s entre transições
  arrows={true}                // Habilita setas de navegação
  customLeftArrow={<CustomLeftArrow />}
  customRightArrow={<CustomRightArrow />}
>
```

**Responsividade (configurado em `styles`):**
```typescript
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4, // 4 logos visíveis
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3, // 3 logos visíveis
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2, // 2 logos visíveis
  },
};
```

#### Componentes de Navegação

**Setas Customizadas:**
```typescript
const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <S.ArrowButton $side="left" onClick={onClick}>
    <ChevronLeft />
  </S.ArrowButton>
);

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <S.ArrowButton $side="right" onClick={onClick}>
    <ChevronRight />
  </S.ArrowButton>
);
```

- **Ícones**: `lucide-react` (ChevronLeft, ChevronRight)
- **Posicionamento**: Via prop `$side` (transient prop do styled-components)
- **Interatividade**: Controles manuais + autoplay

#### Gerenciamento de Assets

**Importação de Imagens:**
```typescript
import csn from '../../assets/images/clientes/CSN.png';
import usiminas from '../../assets/images/clientes/USIMINAS.png';
// ... demais imports
```

**Estrutura de Pastas:**
```
src/
└── assets/
    └── images/
        └── clientes/
            ├── CSN.png
            ├── USIMINAS.png
            ├── ARCELORMITTAL.png
            └── ...
```

#### Como Adicionar Novos Clientes

1. **Adicione a imagem** em `src/assets/images/clientes/`
2. **Importe no componente:**
```typescript
   import novoCliente from '../../assets/images/clientes/NovoCliente.png';
```
3. **Adicione ao array `logos`:**
```typescript
   const logos = [
     // ... logos existentes
     { src: novoCliente, alt: 'Novo Cliente' },
   ];
```

#### Fluxo de Funcionamento
```
1. Carrossel inicia com autoPlay ativo
2. A cada 3.5s, avança automaticamente
3. Usuário pode navegar manualmente com as setas
4. Loop infinito: ao chegar no final, retorna ao início
5. Número de itens visíveis se ajusta ao breakpoint
```

#### Observações Importantes
- **Acessibilidade**: Textos `alt` em todas as imagens
- **Performance**: Imagens devem ser otimizadas (PNG/WebP)
- **Design Pattern**: Separation of Concerns (dados separados da lógica)
- **Transient Props**: `$side` evita passar props HTML inválidas ao DOM
- **Infinite Loop**: Experiência contínua sem interrupções visuais

#### Exemplo de Uso Completo
```typescript
// Na página Home
import { SectionCarousel } from './components/SectionCarousel/SectionCarousel';
import { ClientsCarousel } from './components/ClientsCarousel/ClientsCarousel';

export const Home = () => {
  return (
    <main>
      {/* ... outros componentes */}

      <SectionCarousel title="Nossos Clientes">
        <ClientsCarousel />
      </SectionCarousel>

      {/* ... outros componentes */}
    </main>
  );
};
```
-------------------------------------------------------------------------

### Componente `Map` (Atualizado)
Componente técnico responsável por **renderizar o mapa do Google Maps** através de um iframe incorporado.
Não possui conteúdo institucional nem título — sua função é exclusivamente técnica e reutilizável.

#### Localização
- **Caminho**: `src/components/Sections/Map/Map.tsx`
- **Usado em**: Componente `SectionMap`
- **OBS**: Não é chamado diretamente pela página (home e etc).

#### Props
```typescript
type MapProps = {
  src: string; // URL de incorporação (embed) do Google Maps
};

```
#### Responsividade
- Desktop: altura padrão de 400px
- Mobile (< 768px): altura reduzida para melhor visualização
- O iframe se ajusta automaticamente ao container

#### Como Usar
- Renderiza um <iframe> com o mapa incorporado do Google Maps
- Recebe a URL do mapa via prop src
- Ocupa 100% da largura e altura do container pai
- Possui bordas arredondadas e sombra para efeito de “card”


#### Observações Importantes
- **src**: deve ser obtido através da opção “Incorporar um mapa” do Google Maps
- Não utilizar links do tipo maps.app.goo.gl (não funcionam em iframe)
- O componente não define fundo nem espaçamento externo
- Ideal para reutilização em outras seções ou páginas, se necessário

-------------------------------------------------------------------------------
### Componente `SectionMap` (Atualizado)
Componente responsável por **organizar a seção institucional de localização**, combinando texto explicativo e o componente **Map**.

Define **layout, espaçamento, fundo da seção e contexto visual**, enquanto o Map cuida apenas da renderização do mapa.

#### Localização
- **Caminho**: `src/components/Sections/SectionMap/SectionMap.tsx`
- **Usado em**: Importado e utilizado na página `Home`


#### Como Funciona
- Possui um Wrapper que ocupa 100% da largura da viewport e aplica o fundo da seção
- Utiliza um Container interno com largura limitada e centralizada
- Define internamente a constante MAP_SRC, contendo a URL de incorporação do Google Maps
- Passa o MAP_SRC para o componente Map

#### Responsividade
- Desktop: layout centralizado, mapa em destaque
- Tablet e Mobile: layout fluido com espaçamento lateral reduzido
- O mapa se ajusta automaticamente ao tamanho da tela

#### Observações Importantes
- O componente SectionMap é responsável por qual mapa será exibido
- O componente Map é responsável apenas por como o mapa é renderizado
- A página Home deve utilizar apenas o SectionMap, nunca o Map diretamente

--------------------------------------------------------------------------
