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

---

## 🎨 Estilos Globais

### Pasta `styles` — arquivo `global.ts`

Utiliza a biblioteca **normalize.css** para padronizar o comportamento dos estilos entre navegadores.

O `GlobalStyle` define:

- Reset e normalização de CSS
- Fonte padrão do projeto
- Cores base
- Configurações globais de layout

Esse arquivo é carregado uma única vez na aplicação.

---

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

---

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

---

## ESTRUTURA DO SITE

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

---

### Componente `Hero` (Atualizado)

Componente responsável pelo **banner principal (Hero Section)** da página inicial do site.
Apresenta um título de destaque, subtítulo e botões de call-to-action sobre uma imagem de fundo impactante, com foco em conversão e apresentação institucional.

#### Local de Uso

- Importado e utilizado na page Home (`Home.tsx`)

#### Estrutura de Props

```tsx
type HeroProps = {
  title: string; // Título principal (obrigatório)
  subtitle: string; // Subtítulo de apoio (obrigatório)
  primaryButtonText: string; // Texto do botão principal
  secondaryButtonText: string; // Texto do botão secundário
  onPrimaryClick?: () => void; // Callback do botão principal
  onSecondaryClick?: () => void; // Callback do botão secundário
};
```

#### Como Utilizar

Na página Home, importe o componente Hero e informe as propriedades desejadas.
A lógica de navegação ou qualquer outra ação dos botões deve ser definida na página, mantendo o componente desacoplado de regras de negócio.

```tsx
<Hero
        title="Soluções industriais em borrachas e materiais elétricos"
        subtitle="Atendendo indústrias com qualidade, agilidade e confiança"
        primaryButtonText="Solicitar orçamento"
        secondaryButtonText="Fale com um especialista"
        onPrimaryClick={() => navigate('/contato')}
        onSecondaryClick={() => navigate('/empresa')}
      />
};
```

#### 🎨 Características

- Responsivo: Adaptado para desktop, tablet e mobile
- Imagem de fundo fixa: Definida no arquivo de styled-components (`Hero.styles.ts`)
- Overlay escuro: Garante legibilidade do texto sobre a imagem
- Botões interativos: Estados de hover e foco para melhor UX
- Tipografia escalável: Ajustes automáticos por breakpoint
- Acessível: Estrutura semântica utilizando <section> e headings adequados
-

#### Observação Importante

O componente Hero não define rotas nem comportamentos internos.
Todas as ações dos botões são passadas via callbacks, permitindo reutilização do componente em diferentes contextos sem acoplamento ao sistema de rotas.

---

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
  title: 'Por que escolher a Consulter?', // Título da seção
  description: `Texto com HTML`, // Descrição (aceita HTML)
  image1, // Imagem principal (obrigatória)
  image2, // Segunda imagem (opcional)
  buttonText: 'Saiba mais', // Texto do botão (opcional)
  path: '/quem-somos', // Rota de destino (opcional)
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

---

### Componente `CardProduct` (Atualizado)

Componente responsável por **renderizar um card individual de produto**, utilizado para representar as linhas de produtos da empresa dentro da seção de produtos.
Exibe um título, uma descrição, um ícone, uma imagem principal e dois botões de ação (texto e ícone), ambos direcionando para a página de detalhes do produto.

#### Local de Uso

- Utilizado exclusivamente pelo componente (`SectionProduct.tsx`)
- Renderizado na página Home (Home.tsx) por meio do `SectionProduct`

#### Estrutura de Props

```tsx
{
  title: string;                 // Título do produto
  description: string;           // Descrição do produto
  images: [string, string];      // [0] Ícone | [1] Imagem principal
  buttonText: string;            // Texto do botão ("Saiba mais")
  onButtonClick?: () => void;    // Função executada ao clicar no card/botões
}
```

#### Como Usar

1. Importe as imagens no arquivo que usa `SectionProduct`. OBS: O caminho da imagem é na `Home`
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
- O caminho das imagens é definido na página que importa o `SectionProduct`

---

### Componente `SectionProduct` (Atualizado)

Componente responsável por **exibir as linhas de produtos da empresa** em formato de cards, utilizando internamente o componente `CardProduct`.

A seção apresenta um título e **quatro cards fixos**, representando as categorias:

- Borrachas
- Material Elétrico
- Acessórios
- Soluções Industriais

Os dados visuais (imagens e ícones) são definidos externamente no arquivo `Home.data.ts`, mantendo o componente desacoplado de conteúdo específico.

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

- Importe e utilize o componente na página `Home`
  <SectionProduct {...productSectionData} />
- As imagens e ícones são definidos no arquivo `Home.data.ts`:
- Cada card é renderizado utilizando o componente `CardProduct`
- As informações de título, descrição e rota de navegação de cada card são definidas internamente no componente
- A navegação é realizada utilizando o hook useNavigate do react-router-dom

#### Cards Renderizados

O componente renderiza **4 cards fixos** com as seguintes informações:

1. **Borrachas**: "Borrachas industriais para vedação, isolamento e aplicações de alta resistência."
2. **Material Elétrico**: "Componentes elétricos industriais para automação, manutenção e infraestrutura."
3. **Acessórios**: "Acessórios industriais para suporte, fixação e montagem de sistemas."
4. **Soluções Industriais**: "Soluções personalizadas para processos e sistemas industriais."

#### Observações

- O conteúdo visual é gerenciado externamente no **Home.data.ts**
- Todos os cards navegam para sua respectiva página (ex: `/produtos/acessorios`) ao clicar (ajustar rotas conforme necessário)
- Cada card usa internamente o componente `CardProduct`
- As imagens são organizadas em pares `[ícone, imagemPrincipal]` antes de serem passadas ao `CardProduct`
- O layout, grid e responsividade são controlados pelo arquivo`SectionProduct.styles.ts`

---

## COMPONENTE DE FORMULÁRIO

### Componente `FormContact` (Atualizado)

Formulário de contato institucional construído com **React Hook Form**, responsável por receber mensagens gerais de clientes, parceiros ou visitantes do site.

É utilizado para **dúvidas, solicitações genéricas e primeiro contato**, com validação de campos, feedback visual e controle de ambiente (teste/produção).

#### Dependências

```bash
npm install react-hook-form react-hot-toast
```

#### Local de Uso

- **Caminho**: `src/components/Forms/FormContact/FormContact.tsx`
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

| Hook/Método              | Função                                        |
| ------------------------ | --------------------------------------------- |
| `register`               | Registra e valida campos do formulário        |
| `handleSubmit`           | Processa o envio após validação               |
| `reset`                  | Limpa todos os campos e erros                 |
| `formState.errors`       | Exibe mensagens de erro por campo             |
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

- **Biblioteca**: react-hot-toast
- **Posição**: Centro da tela
- **Estilo**: Dark mode com bordas arredondadas
- **Duração**: 5s em produção 9s em teste (sucesso) / 4s (erro)
- Instalado biblioteca react-hot-toast para personalizar o alert.
- Componente `Toaster` é o que define a posição da mensagem, cor, tempo e etc.

#### Ambiente de Execução (Teste X Produção)

O formulário detecta automaticamente o ambiente usando o Vite:

```
const isDev = import.meta.env.DEV;
const submitHandler = isDev ? onSubmitMock : onSubmitReal;

```

**Desenvolvimento (npm run dev)**
→ Executa função mock (simulação, sem envio real)

**Produção (npm run build)**
→ Executa envio real (ex: Formspree)

Esse padrão evita envios acidentais durante testes.

---

### Componente `FormOrcamento` (Atualizado)

Formulário especializado para **solicitação de orçamento**, criado para qualificar leads e coletar informações técnicas mais detalhadas.

Utiliza a **mesma base visual e estrutural do** `FormContact`, porém com campos específicos para orçamento.

#### Dependências

```bash
npm install react-hook-form react-hot-toast
```

#### Local de Uso

- **Caminho**: `src/components/Forms/FormOrcamento/FormOrcamento.tsx`
- **Usado em**: `SectionOrcamento`

#### Estrutura de Dados

```typescript
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
```

**Validações implementadas:**

- Nome: obrigatório
- Empresa: obrigatório
- Telefone: obrigatório
- E-mail: obrigatório + validação de formato
- Tipo de necessidade: obrigatório
- Produto / Serviço: opcional
- Quantidade estimada: opcional
- Prazo desejado: opcional
- Observações técnicas: opcional
  ;

#### Como Usar

- Usuário informa dados básicos e técnicos
- handleSubmit valida os campos obrigatórios
- Sistema identifica automaticamente o ambiente:

Dev → mock de envio

Prod → envio real

- Exibe toast de sucesso ou erro
- Após sucesso, formulário é limpo com reset()

**React Hook Form - Principais recursos:**

| Hook/Método              | Função                                        |
| ------------------------ | --------------------------------------------- |
| `register`               | Registra e valida campos do formulário        |
| `handleSubmit`           | Processa o envio após validação               |
| `reset`                  | Limpa todos os campos e erros                 |
| `formState.errors`       | Exibe mensagens de erro por campo             |
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

- **Biblioteca**: react-hot-toast
- **Posição**: Centro da tela
- **Estilo**: Dark mode com bordas arredondadas
- **Duração**: 5s em produção 9s em teste (sucesso) / 4s (erro)
- Instalado biblioteca react-hot-toast para personalizar o alert.
- Componente `Toaster` é o que define a posição da mensagem, cor, tempo e etc.

#### Ambiente de Execução (Teste X Produção)

O formulário detecta automaticamente o ambiente usando o Vite:

const isDev = import.meta.env.DEV;

**Desenvolvimento (npm run dev)**
→ Executa função mock (simulação, sem envio real)

**Produção (npm run build)**
→ Executa envio real (ex: Formspree)

Esse padrão evita envios acidentais durante testes.

---

### Componente `SectionContacUs`

Seção completa de contato contendo informações de contato (telefones, email) e o formulário `FormContact`.

#### Local de Uso

- **Caminho**: `src/components/SectionContactUs/SectionContactUs.tsx`
- **Usado em**: Página `Home`

#### Props (Interface ContactInfo)

```typescript
export type ContactInfo = {
  phone: string; // Telefone principal (obrigatório)
  phone2?: string; // Telefone secundário (opcional)
  phone3?: string; // Telefone terciário (opcional)
  nome2?: string; // Nome do contato 2 (opcional)
  nome3?: string; // Nome do contato 3 (opcional)
  email: string; // Email (obrigatório)
  text?: string; // Texto adicional (opcional)
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

---

## Componentes de Carrossel

### `SectionCarousel`

Container wrapper que envolve carrosseis, fornecendo estrutura consistente com título e área de conteúdo.

#### Localização

- **Caminho**: `src/components/SectionCarousel/SectionCarousel.tsx`
- **Usado em**: Página `Home` (envolve o `ClientsCarousel`)

#### Props

```typescript
type SectionCarouselProps = {
  title: string; // Título da seção
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

---

### Componente `Map` (Atualizado)

Componente técnico responsável por **renderizar o mapa do Google Maps** através de um iframe incorporado.
Não possui conteúdo institucional nem título — sua função é exclusivamente técnica e reutilizável.

#### Localização

- **Caminho**: `src/components/Sections/SectionMap/Map.tsx`
- **Usado em**: Componente `SectionMapHome` ou `SectionMapPage`
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

---

### Componente `SectionMapHome` (Atualizado)

Componente responsável por **organizar a seção institucional de localização** da página inicial, combinando **título, texto explicativo, mapa interativo e link externo para rotas no Google Maps**.

Define **layout, espaçamento, fundo da seção e contexto visual**, enquanto o componente **Map** é responsável exclusivamente pela renderização do iframe do Google Maps.

#### Localização

- **Caminho**: `src/components/Sections/SectionMap/SectionMapHome`
- **Usado em**: Importado e utilizado na página `Home`

#### Como Funciona

- O componente realiza um fetch('/googleMap.json') ao ser montado
- O valor `MAP_SRC` é utilizado para renderizar o iframe do Google Maps
- O valor `href` é utilizado no link “Ver rotas no Google Maps”
- Renderiza o componente **Map**, responsável apenas pela exibição do mapa

#### Configuração via `googleMap.json`

O componente **não define diretamente as URLs do mapa no código**.
As informações são carregadas dinamicamente a partir de um arquivo JSON localizado na pasta `public`.

**Arquivo**:

```txt
public/googleMap.json
{
  "MAP_SRC": "https://www.google.com/maps/embed?pb=...",
  "href": "https://maps.app.goo.gl/SEU_LINK"
}
```

#### Responsividade

- Desktop: layout centralizado, mapa em destaque
- Tablet e Mobile: layout fluido com espaçamento lateral reduzido
- O mapa se ajusta automaticamente ao tamanho da tela

#### Observações Importantes

- O componente `SectionMapHome` é responsável por **definir qual mapa será exibido**
- O componente `Map` deve utilizar apenas o `SectionMapHome` ou `SectionMapPage`, nunca o componente Map diretamente
- A página `Home` deve utilizar apenas o `SectionMapHome`, nunca o Map diretamente
- As configurações de endereço e rotas ficam centralizadas no arquivo `googleMap.json`, facilitando manutenção futura

---

### Componente `SectionMapPage` (Atualizado)

Componente responsável por **organizar a seção institucional de localização**, combinando texto explicativo e o componente **Map**.

Define **layout, espaçamento, fundo da seção e contexto visual**, enquanto o Map cuida apenas da renderização do mapa.

#### Localização

- **Caminho**: `src/components/Sections/SectionMap/SectionMapPage`
- **Usado em**: Importado e utilizado na página `Contato` e `Orçamento`

#### Como Funciona

- O componente realiza um fetch('/googleMap.json') ao ser montado
- O valor `MAP_SRC` é utilizado para renderizar o iframe do Google Maps
- O valor `href` é utilizado no link “Ver rotas no Google Maps”
- Renderiza o componente **Map**, responsável apenas pela exibição do mapa

#### Configuração via `googleMap.json`

O componente **não define diretamente as URLs do mapa no código**.
As informações são carregadas dinamicamente a partir de um arquivo JSON localizado na pasta `public`.

**Arquivo**:

```txt
public/googleMap.json
{
  "MAP_SRC": "https://www.google.com/maps/embed?pb=...",
  "href": "https://maps.app.goo.gl/SEU_LINK"
}
```

#### Responsividade

- Desktop: layout centralizado, mapa em destaque
- Tablet e Mobile: layout fluido com espaçamento lateral reduzido
- O mapa se ajusta automaticamente ao tamanho da tela

#### Observações Importantes

- O componente `SectionMapPage` é responsável por **definir qual mapa será exibido**
- O componente `Map` deve utilizar apenas o `SectionMapHome` ou `SectionMapPage`, nunca o componente Map diretamente
- A página `Contato`, `Orçamento` ou outras páginas sem ser a Home deve utilizar apenas o `SectionMapPage`, nunca o Map diretamente
- As configurações de endereço e rotas ficam centralizadas no arquivo `googleMap.json`, facilitando manutenção futura

---

### Componente `CTASection`

Componente responsável por exibir uma **seção de chamada para ação (Call To Action)**, utilizada para incentivar o usuário a entrar em contato com a empresa.

Apresenta um texto de impacto, um botão de ação e **uma imagem de fundo fixa**, criando destaque visual entre as seções da página.

---

#### Local de Uso

- Importado e utilizado na página Home (`Home.tsx`)
- Geralmente posicionado antes do Footer, como CTA final da página

---

#### Estrutura de Props

> Este componente **não recebe props no momento**.
> Os textos, imagem de fundo e rota de navegação são definidos internamente.

---

#### Como Funciona

- Utiliza uma imagem de fundo aplicada via `styled-components`
- Aplica um **overlay escuro** para garantir a legibilidade do texto
- Exibe um título principal, um subtítulo e um botão de ação
- O botão redireciona o usuário para a página de contato (`/contato`)
- A imagem de fundo utiliza o efeito de **background fixo** (`background-attachment: fixed`) para criar uma leve sensação de profundidade ao rolar a página

---

#### Layout e Estilo

- Seção em largura total (`width: 100%`)
- Altura controlada por viewport (`vh`) com valor mínimo definido
- Texto centralizado vertical e horizontalmente
- Botão com destaque visual seguindo a identidade da marca
- Overlay aplicado para contraste entre texto e imagem

---

#### Responsividade

- **Desktop**: imagem de fundo fixa com efeito visual ao rolar a página
- **Mobile e Tablets**: o efeito de background fixo é desativado automaticamente, garantindo melhor desempenho e compatibilidade
- O conteúdo se adapta ao tamanho da tela mantendo legibilidade

---

#### Observações

- O efeito visual é intencionalmente **sutil**, evitando distrações
- Caso seja necessário tornar o componente mais dinâmico, ele pode evoluir para receber props (título, subtítulo, imagem e rota)
- O componente segue o padrão arquitetural do projeto:
  - `SectionX` → seção completa de página (layout + conteúdo)
  - Componentes técnicos ficam fora da pasta `Sections`

---

#### Padrão Arquitetural Aplicado

```txt
CTASection → seção de chamada para ação (layout + conteúdo)
Home       → composição das seções
```

---

### Componente `PageHeroSection` (Atualizado)

Componente responsável por exibir o **banner principal das páginas internas** do site, utilizando uma imagem de fundo em largura total com texto sobreposto.

É utilizado para apresentar o título da página, um subtítulo opcional e criar um impacto visual inicial consistente, mantendo alinhamento com a identidade visual do projeto.

---

#### Local de Uso

- Utilizado em páginas internas, como:
  - Trabalhe Conosco
  - Institucional
  - Portfólio
  - Outras páginas que necessitam de um hero visual
- Importado diretamente nas pages correspondentes (ex: `TrabalheConosco.tsx`)

---

#### Estrutura de Props

```tsx
{
  title: string;              // Título principal da página
  subTitle?: string;          // Subtítulo opcional
  image: string;              // Imagem de fundo do banner
  children?: React.ReactNode; // Conteúdo adicional renderizado abaixo do banner
}
```

#### Como Funciona

- Renderiza uma seção (section) em largura total com imagem de fundo
- Aplica um overlay em gradiente para melhorar a legibilidade do texto
- Exibe o título e o subtítulo sobre a imagem
- Aplica uma faixa decorativa na parte inferior, reforçando a identidade visual
- Utiliza animações suaves com framer-motion para entrada do conteúdo
- Renderiza o conteúdo adicional (children) logo abaixo do banner principal

#### Observações

- O componente é genérico e pode ser reutilizado em diferentes páginas
- Não possui regras de navegação internas
- O conteúdo textual é totalmente controlado pelas props
- O layout e os efeitos visuais são definidos no arquivo PageHeroSection.styles.ts
- O uso de children permite compor o restante da página mantendo consistência visual

---

### Componente `MotionReveal` (Atualizado)

Componente genérico responsável por aplicar **animação de entrada baseada no scroll** (scroll reveal) em qualquer conteúdo da aplicação.

Utiliza a biblioteca **Framer Motion** para animar elementos quando eles entram na área visível da tela (viewport), criando uma experiência visual mais fluida e moderna.

---

#### Local de Uso

- Pode ser utilizado em qualquer página ou seção do site
- Usado atualmente em:
  - Página **Quem Somos** (cards de Missão, Visão, Valores e Atuação)
- Indicado para animação de:
  - Cards
  - Blocos de conteúdo
  - Seções institucionais
  - Listas e grids

---

#### Estrutura de Props

```tsx
{
  children: React.ReactNode; // Conteúdo que será animado
  delay?: number;            // Delay opcional da animação (em segundos)
}
```

#### Como Usar

```tsx
{
  import { MotionReveal } from '@/components/Motion/MotionReveal';

  <MotionReveal delay={0.2}>
    <Card>
      <h3>Título</h3>
      <p>Conteúdo animado ao entrar na tela.</p>
    </Card>
  </MotionReveal>;
  //Para listas ou grids, o delay pode ser calculado dinamicamente:
  {
    items.map((item, index) => (
      <MotionReveal key={item.id} delay={index * 0.1}>
        <Item>{item.content}</Item>
      </MotionReveal>
    ));
  }
}
```

## 🎬 Padrão de Animações do Projeto

O projeto utiliza animações de forma **pontual e controlada**, com o objetivo de melhorar a experiência do usuário sem comprometer a performance ou a leitura do conteúdo.

As animações seguem um **padrão claro de responsabilidades**, dividido em dois níveis: animação global de página e animação local por bloco.

---

### 1️⃣ Animação Global de Página (`PageHeroSection`)

O componente `PageHeroSection` aplica uma **animação leve de entrada** ao conteúdo principal da página quando ela é acessada.

Essa animação:

- é aplicada **uma única vez**, no carregamento da página
- afeta todo o conteúdo passado via `children`
- cria uma transição suave de opacidade e deslocamento vertical

#### Objetivo

- Melhorar a primeira impressão ao acessar páginas internas
- Tornar a navegação mais fluida
- Evitar carregamento visual brusco de grandes blocos de texto

#### Comportamento

- Tipo: fade + slide up
- Executa apenas uma vez
- Não depende de scroll

Esse padrão é ideal para páginas institucionais como:

- Quem Somos
- Trabalhe Conosco
- Páginas informativas com leitura contínua

---

### 2️⃣ Animação Local por Bloco (`MotionReveal`)

O componente genérico `MotionReveal` é utilizado para aplicar animações **baseadas em scroll**, fazendo com que elementos apareçam conforme entram na área visível da tela.

Essa animação:

- é aplicada **individualmente por elemento**
- executa apenas uma vez por item
- pode ser escalonada com `delay` para criar efeito de stagger

#### Objetivo

- Destacar blocos específicos de conteúdo
- Evitar sobrecarga visual
- Guiar o olhar do usuário ao rolar a página

#### Uso recomendado

- Cards institucionais
- Listas
- Blocos de destaque
- Seções longas com múltiplos elementos

Exemplo de uso:

```tsx
<MotionReveal delay={0.2}>
  <Card />
</MotionReveal>
```

---

### Componente `WhatsAppButton` (Atualizado)

Componente responsável por exibir um **botão flutuante de contato via WhatsApp**, fixado no canto inferior direito da tela.

Permite que o usuário inicie uma conversa diretamente no WhatsApp, com número e mensagem pré-definidos, reforçando o canal de atendimento rápido e aumentando a conversão.

---

#### Localização

- **Caminho**: `src/components/Layout/WhatsApp/WhatsAppButton.tsx`
- **Usado em**: Componente `Layout` (visível em todas as páginas do site)

---

#### Estrutura de Props

```ts
type WhatsAppButtonProps = {
  phone: string; // Número do WhatsApp no formato internacional (ex: 5531999999999)
  message?: string; // Mensagem inicial opcional
};
```

#### Configuração via whatsApp.json

As informações do botão são carregadas a partir de um arquivo JSON localizado na pasta `public`, facilitando manutenção sem alterar o código-fonte.

- public/whatsApp.json

#### Funcionamento:

- O arquivo é carregado via fetch
- O campo phone define o número de destino
- O campo message define a mensagem inicial exibida no WhatsApp
- Caso o JSON não seja carregado, o botão não é exibido

----
### Componente `ProductCategory` (Atualizado)

Componente responsável por **exibir categorias de produtos industriais** em formato de card, utilizado nas páginas internas de produtos (ex: *Borrachas Industriais*).

Cada card apresenta:
- Um **título destacado** com faixa visual
- Um **ícone representativo da categoria**
- Uma **lista de itens/produtos**
- Uma **ação de call-to-action** para solicitação de orçamento

---

#### Localização
- **Caminho**: `src/components/ProductCategory`
- **Usado em**: Páginas de produtos (ex: `Borrachas.tsx`, `MaterialEletrico.tsx`, etc.)

---

#### Estrutura de Props

```tsx
type ProductCategoryProps = {
  image: string;   // Ícone ou imagem representativa da categoria
  title: string;   // Título da categoria (ex: "Correias")
  items: string[]; // Lista de produtos/itens da categoria
};

```

#### Como Funciona

- Renderiza um card vertical com layout flexível
- O cabeçalho do card utiliza gradiente escuro + verde institucional, criando destaque visual e alinhamento com o header do site
- A lista de itens é renderizada dinamicamente a partir do array items
- O botão "Solicitar orçamento" direciona o usuário para a página /orcamento
- O card possui animação de hover (elevação e sombra) para melhor feedback visual


#### Observações Importantes

- Ideal para ser alimentado por arquivos de dados (ex: dataProductRubber.ts)
- Pode ser reutilizado para outras linhas de produtos sem alteração de código
- Mantém identidade visual consistente com o restante do site
