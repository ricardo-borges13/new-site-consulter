# React + TypeScript + Vite

# CONSULTER SOLUÇÕES - SITE INSTITUCIONAL

Este é um site baseado em React para a Consulter, uma empresa que fornece soluções industriais. O projeto é construído com Vite e TypeScript, e usa React Router para navegação e Styled Components para estilização.

## 🚀 Tecnologias

**Framework:** React
**Ferramenta de Build:** Vite
**Linguagem:** TypeScript
**Roteamento:** React Router
**Estilização:** Styled Components / Bootstrap
**Linting:** ESLint
**Gerenciador de Pacotes:** npm

### OBSERVAÇÃO
Projeto rodando ainda em fase de teste no endereço: https://consulter.invetec.com.br/

* Tive que criar um SUB-DOMINIO na DialHost
* O arquivo .htaccess ficou da seguinte forma:

***.htaccess***
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

RewriteRule ^index\.html$ - [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>





## Convenções de Desenvolvimento

- O projeto segue a estrutura padrão de projetos React.
- Os componentes estão localizados no diretório `src/components`.
- As páginas estão localizadas no diretório `src/pages`.
- O componente principal da aplicação é o `src/App.tsx`.
- O roteamento é definido em `src/router/AppRoutes.tsx`.
- Os estilos globais são definidos em `src/assets/style/global.ts`.

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

# Arquivo `AppRoutes.tsx` - OK

Responsável por **configurar e mapear todas as rotas da aplicação** usando React Router v6, definindo quais componentes serão renderizados para cada caminho (URL).

---

## Funcionamento

- Utiliza `createBrowserRouter` do **React Router v6** para criar o roteador
- Define rotas **aninhadas** usando a estrutura de `children`
- Implementa **lazy loading** para otimizar o carregamento inicial da aplicação
- Configura rota **404** (Not Found) para URLs inexistentes

---

## Estrutura de Rotas

### **Rota Pai (Layout Compartilhado)**
```tsx
{
  element: <Layout />,
  children: [ /* rotas filhas */ ]
}
```
- Todas as rotas filhas **herdam** o layout (Header, Footer, WhatsApp)
- O componente `<Outlet />` dentro de `Layout` é substituído pelo conteúdo de cada página

### **Rotas Filhas (Páginas)**

| Path | Componente | Descrição |
|------|------------|-----------|
| `/` | `Home` | Página inicial |
| `/quem-somos` | `QuemSomos` | Institucional |
| `/produtos/material-eletrico` | `Eletrica` | Produtos elétricos |
| `/produtos/borrachas-industriais` | `Borrachas` | Produtos de borracha |
| `/produtos/acessorios-industriais` | `AcessoriosManutencao` | Acessórios |
| `/produtos/solucoes-industriais` | `SolucoesIndustriais` | Soluções |
| `/trabalhe-conosco` | `TrabalheConosco` | Recrutamento |
| `/contato` | `Contato` | Formulário de contato |
| `/orcamento` | `Orcamento` | Solicitação de orçamento |
| `*` | `NotFound` | Página 404 (qualquer rota inválida) |

---

## Lazy Loading (Code Splitting)

### **Implementação:**
```tsx
const Home = lazy(() => import('../pages/Home'));
const QuemSomos = lazy(() => import('../pages/QuemSomos'));
// ... demais páginas
```

### **Benefícios:**
- ✅ **Carregamento inicial mais rápido**: apenas o código da página atual é baixado
- ✅ **Menor bundle size**: cada página é um chunk separado
- ✅ **Melhor performance**: carrega sob demanda (on-demand)
- ✅ **Experiência otimizada**: usuário não baixa código de páginas que não visitará

### **Requisito:**
O `lazy()` **deve** ser usado com `<Suspense>` no `App.tsx`:
```tsx
<Suspense fallback={<Loading />}>
  <RouterProvider router={router} />
</Suspense>
```

---

## Rota 404 (Not Found)
```tsx
{ path: '*', element: <NotFound /> }
```
- **Captura qualquer URL** que não corresponda às rotas definidas
- Exibe página personalizada de erro 404
- Deve ser a **última rota** na lista de children

---

## Integração com a Aplicação

### **Arquivo `App.tsx`:**
```tsx
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRoutes';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
```

---

## Organização de Rotas

### **Rotas Institucionais:**
- `/` - Home
- `/quem-somos` - Sobre a empresa
- `/contato` - Formulário de contato
- `/trabalhe-conosco` - Carreiras

### **Rotas de Produtos (Agrupadas por `/produtos/`):**
- `/produtos/material-eletrico`
- `/produtos/borrachas-industriais`
- `/produtos/acessorios-industriais`
- `/produtos/solucoes-industriais`

### **Rotas de Ação:**
- `/orcamento` - Solicitação de orçamento

---

## Vantagens da Estrutura Atual

- ✅ **Rotas aninhadas**: todas compartilham o mesmo layout automaticamente
- ✅ **Lazy loading**: otimização de performance
- ✅ **Organização clara**: rotas agrupadas por categoria (`/produtos/`)
- ✅ **Escalável**: fácil adicionar novas rotas
- ✅ **SEO-friendly**: URLs semânticas e hierárquicas
- ✅ **Fallback 404**: captura rotas inválidas

---

## Como Adicionar uma Nova Rota

### **1. Criar o componente da página:**
```tsx
// src/pages/NovaPagina/index.tsx
export default function NovaPagina() {
  return <div>Nova Página</div>;
}
```

### **2. Adicionar lazy import:**
```tsx
const NovaPagina = lazy(() => import('../pages/NovaPagina'));
```

### **3. Adicionar rota no array `children`:**
```tsx
{ path: '/nova-pagina', element: <NovaPagina /> }
```

---

## Observações

- O `createBrowserRouter` usa a **History API** do navegador (URLs limpas sem `#`)
- Todas as rotas filhas **herdam** automaticamente o `<Layout />`
- O lazy loading requer que os componentes sejam **default exports**
- A ordem das rotas importa: rotas mais específicas devem vir **antes** de rotas genéricas
- A rota `*` (404) deve sempre ser a **última** no array

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

## 🎨 Theme (Styled Components)

O projeto utiliza **Styled Components** com **ThemeProvider** para centralizar e padronizar estilos globais da aplicação.

O tema permite definir cores, tipografia e outros tokens de design em um único local, facilitando a manutenção e garantindo consistência visual em toda a interface.

---

### 📁 Estrutura
src
└ theme
├ theme.ts
└ styled-components.d.ts


---

### 📄 `theme.ts`

Responsável por definir o objeto de tema utilizado em toda a aplicação.

Exemplo:

```ts
export const theme = {
  colors: {
    background: {
      global: '#F9FAFB',
    },
    text: {
      primary: '#AAAAAA',
    },
    fonts: {
      global: 'Poppins, sans-serif',
    },
    primary: '#94c11f',
    secundary: '#f6f6f6',
    success: '#1e7f4f',
    error: '#b30000',
  }
};

export type Theme = typeof theme;
```
### 📄 styled-components.d.ts
Arquivo responsável por tipar o tema no TypeScript, permitindo autocomplete e validação de tipos ao utilizar o theme.

```tsx
import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```
### 📄 Uso no App.tsx
O ThemeProvider é utilizado para disponibilizar o tema para toda a aplicação.

```tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

<ThemeProvider theme={theme}>
  <GlobalStyle />
  <RouterProvider router={router} />
</ThemeProvider>
```

### 📄 Utilizando o tema nos componentes
```tsx
color: ${({ theme }) => theme.colors.primary};
background: ${({ theme }) => theme.colors.background.global};
font-family: ${({ theme }) => theme.colors.fonts.global};
```
# ✅ Benefícios
- Centralização das variáveis de design
- Melhor organização do CSS
- Autocomplete no TypeScript
- Facilita manutenção e escalabilidade
- Preparado para implementar Dark Mode ou múltiplos temas no futuro

--------------------


## ESTRUTURA DO SITE

### Componente `Layout`


Componente responsável por **definir o layout global da aplicação**, envolvendo todas as páginas que compartilham estrutura visual comum (Header, Footer, WhatsApp Button e ScrollToTop)

#### Funcionamento

- Renderiza elementos **fixos** da aplicação:
  - `HeaderTop`: cabeçalho superior com informações de contato
  - `HeaderMain`: menu de navegação principal
  - `Footer`: rodapé com dados de contato
  - `WhatsAppButton`: botão flutuante de WhatsApp (carregado dinamicamente)
  - `ScrollToTop`: comportamento de scroll ao topo ao navegar entre páginas

- Utiliza o componente `<Outlet />` do **React Router** para renderizar o conteúdo dinâmico das páginas

- Carrega configurações do WhatsApp via **fetch** do arquivo `/public/whatsApp.json`

---

#### Local de Uso

- Importado e utilizado na configuração de rotas (`AppRoutes.tsx`)
- Atua como rota pai para páginas que utilizam layout compartilhado

----

## Estrutura do Componente

### **Estado Interno:**
```tsx
const [whatsApp, setWhatsApp] = useState({});
```
- Armazena telefone e mensagem padrão do WhatsApp
- Carregados via `useEffect` do arquivo `whatsApp.json`

### **Renderização Condicional:**
```tsx
{whatsApp.phone && (

)}
```
- Botão WhatsApp só aparece **após** carregar os dados com sucesso

---

## Dados de Contato

O componente importa e repassa `contactData` para:
- `HeaderTop`
- `Footer`

Garantindo que informações de contato sejam **centralizadas** e **consistentes**.

---

## Estilização

### `LayoutWrapper`
- Display: **flex column**
- Min-height: **100vh** (garante que o layout ocupe pelo menos a altura da tela)

### `MainContent`
- Flex: **1** (expande para preencher o espaço disponível)
- Padding-top: **100px** (compensa altura do header fixo)
- **Responsivo**: Em `smallScreenMobile`, padding aumenta para **180px**

---

## Responsividade

- **Desktop**: `padding-top: 100px`
- **Mobile (< smallScreenMobile)**: `padding-top: 180px`
  - Compensa altura maior do header em dispositivos móveis

---

## Configuração Externa

### Arquivo `whatsApp.json` (public/)
```json
{
  "phone": "5511999999999",
  "message": "Olá! Gostaria de mais informações."
}
```

---

#### Objetivo

- ✅ **Evitar duplicação** de código (Header/Footer em cada página)
- ✅ **Garantir consistência** visual entre páginas
- ✅ **Centralizar comportamentos** globais (scroll, WhatsApp)
- ✅ **Facilitar manutenção** e evolução do layout
- ✅ **Carregar dados dinâmicos** (WhatsApp config)


---

## Observações

- O `<Outlet />` é substituído pelo conteúdo de cada rota filha
- Se o fetch do `whatsApp.json` falhar, o botão WhatsApp **não será renderizado**
- O `ScrollToTop` garante que ao navegar entre páginas, a tela **volte ao topo**
- O `contactData` deve ser exportado do módulo `Header` para funcionar corretamente

-----------------

### Componente `Hero` (OK)

Componente responsável pelo **banner principal (Hero Section)** da página inicial do site.
Apresenta um título de destaque, subtítulo e botões de call-to-action sobre uma imagem de fundo impactante, com foco em conversão e apresentação institucional.

#### Local de Uso

- Importado e utilizado na page Home (`Home.tsx`)

#### Estrutura de Props

```tsx
type HeroProps = {
  title: string; // Título principal (obrigatório)
  subtitle: string; // Subtítulo de apoio (obrigatório)
  primaryButtonText: string; // Texto do botão principal (obrigatório)
  secondaryButtonText: string; // Texto do botão secundário (obrigatório)
  image: string; // Caminho da imagem de fundo (obrigatório)
  onPrimaryClick?: () => void; // Callback do botão principal (opcional)
  onSecondaryClick?: () => void; // Callback do botão secundário (opcional)
};
```

#### Como Utilizar

Na página Home, importe o componente Hero e informe as propriedades desejadas.
A lógica de navegação ou qualquer outra ação dos botões deve ser definida na página, mantendo o componente desacoplado de regras de negócio.

**Importante:** A imagem de fundo agora é passada via prop `image` diretamente no JSX.

```tsx
<Hero
  title="Soluções industriais em borrachas e materiais elétricos"
  subtitle="Atendendo indústrias com qualidade, agilidade e confiança"
  primaryButtonText="Solicitar orçamento"
  secondaryButtonText="Fale com um especialista"
  image="/images/hero-banner.jpg"
  onPrimaryClick={handlePrimaryClick}
  onSecondaryClick={handleSecondaryClick}
/>
```

#### 🎨 Características

- **Responsivo**: Adaptado para desktop, tablet e mobile (`height: clamp(400px, 55vh, 620px)`)
- **Imagem de fundo otimizada**: Tag `<img>` com `loading="eager"` e `fetchPriority="high"` para carregamento prioritário
- **Overlay escuro**: Gradiente que garante legibilidade do texto sobre a imagem
- **Animação de entrada**: Utiliza Framer Motion para transição suave no carregamento
- **Memoização com React.memo**: Evita re-renderizações desnecessárias quando as props não mudam
- **Botões interativos**: Estados de hover e foco para melhor UX
- **Tipografia escalável**: Ajustes automáticos por breakpoint
- **Acessível**: Estrutura semântica utilizando `<section>` e headings adequados

#### Tamanho da Imagem

- **Dimensões**: 1920 x 900 pixels
- **Peso ideal**: 150 - 250 KB
- **Formato recomendado**: JPG (Salvar para Web no Photoshop, ajustando a qualidade (%) para atingir o peso ideal)

#### Otimizações de Performance

O componente utiliza **React.memo** para memoização, evitando re-renderizações desnecessárias.

**Para garantir efetividade do React.memo**, as funções de callback devem ser estáveis no componente pai:

```tsx
const handlePrimaryClick = useCallback(() => {
  navigate('/orcamento');
}, [navigate]);

const handleSecondaryClick = useCallback(() => {
  navigate('/contato');
}, [navigate]);
```

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
Exibe um título, uma descrição e uma imagem principal e dois botões de ação (texto e ícone), ambos direcionando para a página de detalhes do produto.

#### Local de Uso

- Utilizado exclusivamente pelo componente (`SectionProduct.tsx`)
- Renderizado na página Home (Home.tsx) por meio do `SectionProduct`

#### Estrutura de Props

```tsx
{
  title: string;                 // Título do produto
  description: string;           // Descrição do produto
  images: string;                //Imagem principal
  buttonText: string;            // Texto do botão ("Saiba mais")
  onButtonClick?: () => void;    // Função executada ao clicar no card/botões
}
```

#### Como Usar

1. Importe as imagens no arquivo que usa `SectionProduct`. OBS: O caminho da imagem é na `Home.data.ts`
2. Passe as props ao chamar o componente:

```tsx
<CardProduct
  title="Borrachas"
  description="Borrachas industriais e pró-indensça..."
  images={image1}
  buttonText="Saiba mais"
  onButtonClick={() => navigate('/produtos/borrachas')}
/>
```

#### Observações

- A primeira imagem (`images`) é a imagem principal do card
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
  image4: imageProduto4,              // Imagem principal - Soluções
}
```

#### Como Usar

- Importe e utilize o componente na página `Home`
  <SectionProduct {...productSectionData} />
- As imagens são definidos no arquivo `Home.data.ts`:
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

#### Tamanho da imagem

- 1920 (largura) x 1000 (altura) pixel
- Peso ideal: 1500-3000 KB
- Formato recomendado: JPG (Salvar para Web no photoShopp. Porcentagem (%) da qualidade de forma que fique no tamanho do peso ideal)

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

npm install framer-motion
---

#### Local de Uso

- Pode ser utilizado em qualquer página ou seção do site
- Usado atualmente em:
  - Todas as páginas com exceção do Home.
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

---

### Componente `ProductCategory` (Atualizado)

Componente responsável por **exibir categorias de produtos industriais** em formato de card, utilizado nas páginas internas de produtos (ex: _Borrachas Industriais_, _Material Elétrico_, etc).

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
  image: string; // Ícone ou imagem representativa da categoria
  title: string; // Título da categoria (ex: "Correias")
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

---

### Componente `SEO`

O componente **`SEO`** é responsável por **gerenciar dinamicamente as meta informações de cada página** do site, como título, descrição, imagem de compartilhamento e URL canônica.

Ele substitui a necessidade de concentrar todas as informações de SEO no `index.html`, permitindo que **cada página defina suas próprias características**, melhorando a indexação nos mecanismos de busca (Google) e o compartilhamento em redes sociais (WhatsApp, LinkedIn, Facebook, etc.).

### 🎯 Objetivo do Componente

- Centralizar a lógica de SEO em um único componente reutilizável
- Garantir **títulos e descrições únicas por página**
- Controlar **Open Graph**, **Twitter Card**, **canonical URL** e **robots**
- Facilitar manutenção e padronização do SEO em projetos futuros

#### Localização

- **Caminho**: `src/components/SEO`

### 🧩 Dependência Global (`react-head`)

o componente SEO depende do **`HeadProvider`**, que deve envolver a aplicação no ponto de entrada (`main.tsx`).
O HeadProvider permite a inserção dinâmica de <title>, <meta> e <link> no <head> do documento.

```tsx
import { HeadProvider } from 'react-head';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeadProvider>
      <App />
    </HeadProvider>
  </StrictMode>
);
```

- **Usado em**: O componente SEO deve ser utilizado em todas as páginas do projeto, definindo informações específicas para cada rota.

```tsx
export const Empresa = () => {
  return (
    <>
          <SEO
        title="Quem Somos - Consulter Soluções"
        description="A Consulter Soluções atua desde 2013 oferecendo materiais elétricos, borrachas industriais e soluções sob medida para diferentes segmentos da indústria, com foco em eficiência, confiabilidade e atendimento especializado."
        image="https://www.consultersolucoes/images/SEO-QuemSomos.jpg"
        url="https://www.consultersolucoes/quem-somos"
        keywords="consulter soluções, quem somos consulter, materiais elétricos industriais, borrachas industriais, soluções industriais, a empresa"
      />
```

#### Dimensões de imagens

- 1200 x 630 px - Padrão ouro (Facebook / Whatsapp / Linkedin)
- ~150 KB → excelente (rápido, não compromete SEO)
- Nome do arquivo: SEO-QuemSomos.jpg
- Formato: .jpg ou .webp
- Pasta: public/images

#### Estrutura de Props

```tsx
type SEOProps = {
  title: string; // O componente SEO deve ser utilizado em todas as páginas do projeto, definindo informações específicas para cada rota.
  description: string; //Título que aparece no Google abaixo do título
  image?: string; // O componente SEO deve ser utilizado em todas as páginas do projeto, definindo informações específicas para cada rota.
  url?: string; // URL da página atual
  keywords?: string; // Imagem de compartilhamento (Open Graph / Twitter Card)
  noindex?: boolean; // Palavras-chave para SEO on-page (uso auxiliar)
  nofollow?: boolean; //Impede indexação da página pelos buscadores
};
```

#### Quando usar noindex e nofollow

`noindex={true}` //Impede que a página apareça nos resultados do Google
`nofollow={true}` //Impede que a página apareça nos resultados do Google

- Página 404 / Página não encontrada
- Página de erro
- Pagina de Teste
- Página temporária
- Página que não tem valor de SEO
- Página que não deve competir com outras no google

#### Pode usar só noindex (sem nofollow) em alguns casos:

`noindex={true}`
`nofollow={false}`

- Landing pages internas
- Páginas duplicadas
- Páginas de campanha temporária

#### OBSERVAÇÕES IMPORTANTES

- Cada página deve ter um title e description únicos
- Evite reutilizar a mesma imagem de SEO entre páginas diferentes
- Utilize noindex e nofollow apenas em páginas que não devem aparecer no Google
- O index.html deve conter apenas SEO genérico de fallback, nunca específico de páginas

---

##### Componente `HeaderTop`

Barra de topo fixa com informações de contato (telefone e email) e texto institucional. Exibe links clicáveis que abrem diretamente o discador ou cliente de email.

## 📋 Características

- **Barra fixa no topo** da página (acima do HeaderMain)
- **Links funcionais**: `tel:` para telefone e `mailto:` para email
- **Layout responsivo** com reorganização em mobile
- **Ícones React Icons** para telefone e email
- **Hover effect** com cor de destaque (#94c11f)

## 🎨 Comportamento Visual

### Desktop (> 800px)

- Layout horizontal com flexbox
- Texto institucional à esquerda (ocupa espaço disponível)
- Telefone e email à direita separados por "/"
- Alinhamento: space-between

### Mobile (≤ 800px)

- Layout vertical centralizado
- Itens empilhados um abaixo do outro
- Separador "/" oculto
- Espaçamento reduzido

### Extra Small (≤ 550px)

- Font-size reduzido: 0.8rem
- Links com fonte 1.1rem para legibilidade

## 🔧 Props (ContactInfo)

| Prop    | Tipo     | Obrigatório | Descrição                                     |
| ------- | -------- | ----------- | --------------------------------------------- |
| `text`  | `string` | Sim         | Texto institucional/slogan exibido à esquerda |
| `phone` | `string` | Sim         | Número de telefone principal (formatado)      |
| `email` | `string` | Sim         | Endereço de email de contato                  |

### Exemplo de tipo ContactInfo

```typescript
// types/contact.ts
export type ContactInfo = {
  phone: string;
  phone2?: string;
  phone3?: string;
  nome2?: string;
  nome3?: string;
  email: string;
  text: string;
};
```

**Nota:** O componente usa apenas `text`, `phone` e `email`. Os campos adicionais (`phone2`, `phone3`, etc.) são opcionais e podem ser usados em outros componentes.

## 📦 Dependências

```json
{
  "react": "^18.x",
  "react-icons": "^4.x",
  "styled-components": "^6.x"
}
```

## 🚀 Uso

```tsx
import { HeaderTop } from './components/HeaderTop/HeaderTop';
import { contactData } from './data/contactData';

function App() {
  return (
    <>
      <HeaderTop {...contactData} />
      {/* HeaderMain e resto do conteúdo */}
    </>
  );
}
```

### Uso com props diretas

```tsx
<HeaderTop
  text="Especialistas em transformar desafios em soluções."
  phone="(31) 3500-4797"
  email="consulter@consultersolucoes.com.br"
/>
```

## 📊 Estrutura de Dados

```typescript
// contactData.ts
export const contactData: ContactInfo = {
  phone: '(31) 3500-4797',
  phone2: '(31) 9 9286-3186',
  phone3: '(31) 9 8420-5131',
  nome2: 'Heitor Marliere',
  nome3: 'Fernando Perret',
  email: 'consulter@consultersolucoes.com.br',
  text: 'Especialistas em transformar desafios em soluções.',
};
```

## 🎯 Funcionalidades

### Links Clicáveis

**Telefone:**

```typescript
const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;
// Input: "(31) 3500-4797"
// Output: "tel:3135004797"
```

**Email:**

```typescript
const emailHref = `mailto:${email}`;
// Output: "mailto:consulter@consultersolucoes.com.br"
```

### Comportamento ao Clicar

- **Mobile**: Abre app nativo de telefone/email
- **Desktop**: Abre cliente de email padrão / discador se configurado

## 📱 Breakpoints

| Breakpoint | Comportamento                                   |
| ---------- | ----------------------------------------------- |
| `800px`    | Muda para layout vertical, oculta separador "/" |
| `550px`    | Reduz font-size para 0.8rem, links em 1.1rem    |

## 🎨 Styled Components

### Header

- `position: fixed` no topo (top: 0)
- `z-index: 1100` (acima do HeaderMain que tem 100)
- Background: #1a1a1a
- Border bottom: 3px solid #94c11f
- `caret-color: transparent` remove cursor de texto

### Container

- Max-width: 1200px centralizado
- Padding: 6px 16px
- Display: flex com space-between
- Gap: 1.5rem (desktop) / 0 (mobile)

**Elementos:**

```css
/* Texto institucional */
> div:first-child {
  flex: 1; /* ocupa espaço disponível */
}

/* Ícones */
svg {
  font-size: 1.5rem;
  color: #94c11f;
}

/* Links */
a:hover {
  color: #94c11f;
}
```

## 🎭 Animações e Transições

- **Hover**: Transição de cor nos links (inherit → #94c11f)
- **Responsivo**: Reorganização instantânea via media queries
- **Ícones**: Cor fixa #94c11f (sem animação)

## ⚠️ Observações Importantes

1. **Z-index hierarchy**:
   - HeaderTop: 1100
   - HeaderMain: 100
   - Garante que o topo fique sempre visível

2. **Sanitização de telefone**:
   - Remove todos os caracteres exceto dígitos e "+"
   - Garante compatibilidade com protocolos `tel:`

3. **Espaçamento**:
   - Desktop: gap 1.5rem entre elementos
   - Mobile: gap 0 para melhor uso vertical

4. **Acessibilidade**:
   - Links semânticos (`<a href="tel:">` e `<a href="mailto:">`)
   - Ícones como indicadores visuais

## 🔍 Estrutura HTML Renderizada

```html
<div>
  <!-- Header -->
  <div>
    <!-- Container -->
    <div>Especialistas em transformar...</div>

    <div>
      <svg><!-- Phone Icon --></svg>
      <a href="tel:3135004797">(31) 3500-4797</a>
    </div>

    <span>/</span>

    <div>
      <svg><!-- Email Icon --></svg>
      <a href="mailto:consulter@consultersolucoes.com.br">
        consulter@consultersolucoes.com.br
      </a>
    </div>
  </div>
</div>
```

## 📝 Estrutura de Arquivos

```
HeaderTop/
├── HeaderTop.tsx
├── HeaderTop.styles.ts (ou HeaderTopo.styles.ts)


data/
└── contactData.ts

types/
└── contact.ts
```

## 🛠️ Customização Rápida

**Mudar cor de destaque:**

```typescript
// HeaderTopo.styles.ts
border-bottom: 3px solid #SUA_COR;
color: #SUA_COR; // para ícones e hover
```

**Ajustar altura:**

```typescript
// Container
padding: 10px 16px; // aumenta altura vertical
```

**Adicionar mais informações:**

```tsx
// HeaderTop.tsx
<div>
  <FaMapMarkerAlt />
  <span>{address}</span>
</div>
```

**Mudar breakpoint mobile:**

```typescript
// HeaderTopo.styles.ts
@media (max-width: SEU_VALOR) {
  flex-direction: column;
}
```

## 🤝 Componentes Relacionados

- **HeaderMain**: Header principal que fica logo abaixo
- **contactData**: Arquivo de dados compartilhados
- **ContactInfo type**: Tipagem TypeScript compartilhada

## 💡 Boas Práticas

- Sempre forneça números de telefone formatados para legibilidade
- Use emails válidos para evitar erros no `mailto:`
- Mantenha o texto institucional conciso (ideal: 1 linha)
- Teste links em dispositivos móveis reais

---

---

### Componente `HeaderMain`

Componente de cabeçalho principal da aplicação com navegação responsiva, efeito de scroll e menu mobile.

## 📋 Características

- **Header fixo** com efeito de redução ao rolar a página
- **Menu responsivo** com toggle para dispositivos móveis
- **Logo adaptável** que reduz de tamanho no scroll
- **Botão de orçamento** com animação de seta
- **Navegação integrada** com React Router

## 🎨 Comportamento Visual

### Desktop

- Header inicia com 110px de altura
- Ao rolar 30px, reduz para 70px
- Logo ajusta de 100px para 60px
- Menu horizontal sempre visível

### Mobile (≤ 1038px) `MenuToggle`

- Menu hambúrguer aparece
- Menu se expande verticalmente ao clicar
- Animação suave de abertura/fechamento
- Botão de orçamento oculto em telas ≤ 550px

## 🔧 Props

Este componente não recebe props diretamente, mas o componente `Menu` interno aceita:

| Prop          | Tipo         | Descrição                                                           |
| ------------- | ------------ | ------------------------------------------------------------------- |
| `onLinkClick` | `() => void` | Callback executado ao clicar em links do menu (fecha o menu mobile) |

## 📱 Breakpoints

| Breakpoint | Comportamento                     |
| ---------- | --------------------------------- |
| `1038px`   | Menu hambúrguer ativado           |
| `900px`    | Ajuste de altura do header e logo |
| `775px`    | Margem superior adicional         |
| `770px`    | Redução de padding lateral        |
| `550px`    | Botão de orçamento oculto         |

## 🎯 Funcionalidades

### Scroll Behavior

```tsx
// Detecta scroll > 30px
const handleScroll = () => {
  setIsScrolled(window.scrollY > 30);
};
```

### Menu Toggle

- **Ícone**: Alterna entre `FiMenu` e `FiX`
- **Estado**: Controla abertura/fechamento do menu mobile
- **Auto-close**: Menu fecha automaticamente ao clicar em links
- (≤ 1038px) Menu hamburguer aparece

```JS
@media (max-width: 1038px) {
    display: block;
  }
```

### Navegação

- **Logo**: Link para home (`/`)
- **Botão**: Navega para `/orcamento`
- **Menu**: Links gerenciados pelo componente `Menu`

## 🎨 Styled Components

### HeaderContainer

- `$isScrolled`: Prop transiente que controla altura e estilos

## 🤝 Componentes Relacionados

- **Menu**: Componente de navegação interna
- **Logo**: Asset em `/assets/images/Logo-Header2.png`

### Image (Logo)

- 400 x 120 px
- Formato PNG24 até 50-80KB
- Altura dinâmica baseada em scroll
- Transição suave de 0.3s

### ContactButton

- Gradiente verde (#94C11F → #AFC577)
- Animação de seta no hover
- Oculto em mobile
- (≤ 550px) botão de orçamento ocultado

### MenuContainer

- Desktop: flex horizontal
- Mobile: absolute, full-width, animação vertical
- (≤ 1038px) Os menus descritivos desaparecem

## 🔄 Estados

```tsx
const [isScrolled, setIsScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
```

## ⚠️ Observações

- O header tem `position: fixed` com `top: 34px` (desktop) e `top: 55px` (mobile)
- `z-index: 100` garante que fique acima do conteúdo
- `caret-color: transparent` remove o cursor de texto
- Box-sizing global evita vazamento de conteúdo

## 🎭 Animações

- **Scroll**: 0.3s ease para altura e logo
- **Menu mobile**: Transform Y com opacity
- **Seta do botão**: translateX no hover
- **Hover do botão**: opacity 0.9

## 📝 Estrutura de Arquivos

```
HeaderMain/
├── HeaderMain.tsx
├── HeaderMain.styles.ts
```

---

### Componente `Menu`

Componente de navegação principal com suporte a submenus, comportamento responsivo adaptativo (hover no desktop, click no mobile) e scroll suave para seções.

## 📋 Características

- **Navegação híbrida**: Hover no desktop (> 1038px) e click no mobile (≤ 1038px)
- **Submenus animados** com transições suaves
- **Scroll inteligente** para seções da página (ex: "Produtos")
- **Detecção automática** de viewport para alternar comportamentos
- **Animação diferenciada** por plataforma (fade + transform no desktop, max-height no mobile)

## 🎨 Comportamento por Plataforma

### Desktop (> 1038px)

- **Hover**: Submenu abre ao passar o mouse
- **Menu "Produtos"**: Scroll suave até seção `#produtos` na home
- **Outros menus**: Navegação normal via React Router
- **Visual**: Submenu posicionado absolutamente abaixo do item

### Mobile (≤ 1038px)

- **Click**: Submenu abre/fecha ao clicar
- **Menu "Produtos"**: Toggle do submenu (não navega)
- **Outros menus**: Navegação normal + fecha menu mobile
- **Visual**: Submenu inline com animação de altura

## 🔧 Props

| Prop          | Tipo         | Obrigatório | Descrição                                                                           |
| ------------- | ------------ | ----------- | ----------------------------------------------------------------------------------- |
| `onLinkClick` | `() => void` | Não         | Callback executado ao clicar em links (usado para fechar menu mobile no HeaderMain) |

## 🚀 Uso

```tsx
import { Menu } from './components/Menu/Menu';

// Uso básico
<Menu />

// Com callback (ex: fechar menu mobile)
<Menu onLinkClick={() => setMenuOpen(false)} />
```

## 📊 Estrutura de Dados (menuData)

```typescript
// menuData.ts
export const menuItems = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Produtos',
    path: '#', // não navega, faz scroll
    submenu: [
      { title: 'Produto A', path: '/produtos/a' },
      { title: 'Produto B', path: '/produtos/b' },
    ],
  },
];
```

## 🎯 Breakpoint Crítico

```typescript
// Linha 20 - Menu.tsx
const handleResize = () => setIsMobile(window.innerWidth <= 1038);
```

**Este valor (1038px) controla a transição entre hover e click.**

Para ajustar:

- Menor (ex: 768px) → hover funciona em tablets
- Maior (ex: 1200px) → força click em telas maiores

## 📱 Breakpoints de Estilos

| Breakpoint | Comportamento                                          |
| ---------- | ------------------------------------------------------ |
| `1210px`   | Redução progressiva de gaps (4rem → 1.9rem)            |
| `1112px`   | Gap 1.8rem                                             |
| `1074px`   | Gap 1.6rem                                             |
| `1020px`   | Gap 1.3rem                                             |
| `1002px`   | Gap 0.9rem                                             |
| `1038px`   | **Modo mobile ativado** (layout vertical, fundo verde) |
| `990px`    | Font-weight reduzido (800 → 400)                       |
| `774px`    | Ajustes de cor para submenu mobile                     |

## 🔄 Estados

```typescript
const [openMenu, setOpenMenu] = useState<number | null>(null);
const [isMobile, setIsMobile] = useState(false);
const [openSubmenuMobile, setOpenSubmenuMobile] = useState<number | null>(null);
```

- **openMenu**: ID do submenu aberto no desktop (hover)
- **isMobile**: Detecta se largura ≤ 1038px
- **openSubmenuMobile**: ID do submenu aberto no mobile (click)

## ⚙️ Funções Principais

### handleMenuClick

Gerencia cliques em itens do menu:

```typescript
// Mobile
- "Produtos" → Toggle submenu
- Outros → Navega + fecha menu

// Desktop
- "Produtos" → Scroll para #produtos
- Outros → Navega normalmente
```

### handleMouseEnter / handleMouseLeave

Controla hover no desktop:

```typescript
if (!isMobile) setOpenMenu(id);
```

### handleSubmenuClick

Clique em itens do submenu:

- Fecha todos os submenus
- Navega para o path
- Executa `onLinkClick` callback

## 🎨 Styled Components

### Nav

- Desktop: flex horizontal com gaps responsivos
- Mobile (≤ 1038px): flex vertical, fundo #94c11f, padding 20px

### MenuItem

- Desktop: inline-block com hover effects
- Mobile: block, width 100%

### MenuLink

- Underline animado no hover (barra verde de 4px)
- Cor base: #f8f8f8ff
- Hover: #94c11f (desktop) / #0f0f0f (mobile)
- Font-weight: 800 (desktop) / 400 (< 990px)

### Submenu

**Desktop:**

- Position: absolute
- Background: #dfdedeff
- Animação: opacity + translateY
- Display controlado por `$isOpen`

**Mobile:**

- Position: static (inline)
- Background: transparent
- Animação: max-height (0 → 500px)
- Sempre no DOM, altura controlada

### SubmenuItem

- Padding: 0.6rem 1rem (desktop)
- Hover: background #f9f9f9, cor #94c11f
- Mobile: texto branco, hover com fundo claro

## 🔍 Lógica de Scroll para "Produtos"

```typescript
if (location.pathname === '/') {
  // Já está na home → scroll direto
  const section = document.getElementById('produtos');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
} else {
  // Em outra página → navega para home com state
  navigate('/', { state: { scrollTo: 'produtos' } });
}
```

**Requer:** Elemento com `id="produtos"` na página home.

## ⚠️ Observações

- Submenus têm `pointer-events: none` quando fechados
- Animações diferentes por plataforma para melhor UX
- Event listeners de resize são limpos no cleanup do useEffect
- Z-index 1000 no submenu para ficar acima do conteúdo

## 🎭 Animações

| Elemento  | Desktop                      | Mobile                  |
| --------- | ---------------------------- | ----------------------- |
| Submenu   | opacity + translateY (-10px) | max-height (0 → 500px)  |
| Underline | width 0% → 100% (0.3s)       | -                       |
| Links     | color transition (0.3s)      | color transition (0.3s) |

## 📝 Estrutura de Arquivos

```
Menu/
├── Menu.tsx
├── Menu.styles.ts
├── menuData.ts
└── README.md
```

## 🤝 Componentes Relacionados

- **HeaderMain**: Container principal que usa Menu
- **menuData**: Arquivo de configuração dos itens

## 🛠️ Customização Rápida

**Mudar breakpoint mobile:**

```typescript
// Menu.tsx, linha 20
setIsMobile(window.innerWidth <= SEU_VALOR);
```

**Mudar cor do menu mobile:**

```typescript
// Menu.styles.ts, Nav component
background-color: #SUA_COR;
```

**Adicionar novo item com submenu:**

```typescript
// menuData.ts
{
  id: 3,
  title: 'Serviços',
  path: '#',
  submenu: [...]
}
```

---

# Componente `CustomButton` - ok

Componente de botão reutilizável e estilizado construído com **React e Styled Components**, oferecendo múltiplas variantes visuais e suporte a estados de loading e disabled.

---

## Características

- 🎨 **5 variantes de estilo** predefinidas
- ♿ **Suporte a estados** disabled e loading
- 📱 **Responsivo** com breakpoints mobile
- 🎯 **Flexível** - aceita texto ou children (ícones, JSX)
- ⚡ **Transições e animações** suaves
- 💅 **Estilização** com Styled Components e tema

---

## Local de Uso

- Utilizado em **formulários, headers, páginas de ação** e qualquer lugar que necessite botões estilizados
- Importado diretamente de `./CustomButton`

---

## Estrutura de Props

```tsx
type ButtonProps = {
  text?: string; // Texto do botão (opcional se usar children)
  children?: ReactNode; // Conteúdo customizado (ícones, JSX, etc)
  onClick?: () => void; // Função executada ao clicar
  type?: 'button' | 'submit' | 'reset'; // Tipo HTML do botão (padrão: 'button')
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline-white'
    | 'lightPrimary'
    | 'headerMain'
    | 'cta'; // Variante de estilo (padrão: 'primary')
  disabled?: boolean; // Desabilita o botão (padrão: false)
  loading?: boolean; // Mostra estado de carregamento (padrão: false)
};
```

---

## Variantes Disponíveis

### `primary`

Botão principal com **gradiente**, ideal para ações primárias.

- Background: gradiente do tema (primary)
- Hover: muda cor de fundo e texto para darkGray
- Active: escala reduzida (0.98) e cor secundária
- Utilizado no primeiro botão do`Hero` e `SectionInfo`

### `secondary`

Botão secundário **sólido** para ações alternativas.

- Background: cor secundária do tema
- Hover: opacidade reduzida (0.8)
- Active: escala reduzida e cor secundária
- Utilizado nos `Formulários`

### `outline-white`

Botão com **borda branca e fundo transparente**, ótimo para fundos escuros.

- Background: transparente
- Border: 2px branco
- Hover: fundo branco semi-transparente (0.2)
- Utilizado no segundo botão do `Hero`

### `lightPrimary`

Botão com **cor primária clara e bordas arredondadas** (30px).

- Background: lightPrimary do tema
- Hover: translateY(-2px) + primaryDark
- Padding: 0.9rem 2.2rem
- Utilizado na página `Soluções Industriais`

### `headerMain`

Botão específico para **header com layout inline-flex**.

- Display: inline-flex com gap de 10px
- Min-width: 120px
- Responsivo: **oculto em smallMobile**
- Utilizado no `HeaderMain`

### `cta` ⭐

Botão de **Call-to-Action** com destaque visual para conversões.

- Background: ctaGreen do tema
- Font-size: 1.2rem (maior que outros botões)
- Hover: ctaGreenDark + translateY(-2px)
- Border-radius: 6px (mais suave)
- Ideal para: botões de contato, compra, cadastro
- Utilizado no componente `CTASection`

---

---

## Como Usar

### Botão Simples com Texto

```tsx
<CustomButton text="Clique Aqui" onClick={() => console.log('Clicado!')} />
```

### Botão com Ícone

```tsx
import { FaShoppingCart } from 'react-icons/fa';

<CustomButton variant="primary">
  <FaShoppingCart />
  Adicionar ao Carrinho
</CustomButton>;
```

### Botão de Submissão em Formulário

```tsx
<CustomButton type="submit" variant="secondary" text="Enviar Formulário" />
```

### Botão com Estado de Loading

```tsx
<CustomButton
  variant="lightPrimary"
  text="Salvar"
  loading={isSubmitting}
  onClick={handleSave}
/>
// Exibe "Enviando..." enquanto loading=true
```

### Botão Desabilitado

```tsx
<CustomButton text="Indisponível" disabled={true} variant="outline-white" />
```

### Botão de Header com Ícone

```tsx
<CustomButton variant="headerMain">
  <FaUser />
  Minha Conta
</CustomButton>
```

### Combinação: Ícone + Loading

```tsx
<CustomButton variant="primary" loading={isSaving} onClick={handleSubmit}>
  <FaSave />
  Salvar Alterações
</CustomButton>
// Quando loading=true, exibe apenas "Enviando..."
```

---

## Responsividade

O componente ajusta automaticamente seu estilo em diferentes breakpoints:

- **Mobile** (`max-width: mobile`):
  - Font-weight: normal
  - Font-size: 1.1rem
  - Padding: 0.6rem 1.2rem

- **Extra Small Mobile** (`max-width: extraSmallMobile`):
  - Font-weight: normal
  - Font-size: 0.9rem

- **Small Mobile** (variant `headerMain`):
  - Display: none (botão fica oculto)

---

## Estados Visuais

### Disabled

- Opacidade: **0.6**
- Cursor: **not-allowed**
- Interações desabilitadas

### Loading

- Texto alterado para **"Enviando..."**
- Botão automaticamente **desabilitado**
- Mantém estilo da variante escolhida

### Active (ao clicar)

- Transform: **scale(0.98)**
- Background: cor **secundária** do tema
- Feedback visual imediato

---

## Requisitos de Tema

O componente espera um objeto `theme` com a seguinte estrutura:

```typescript
{
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    lightPrimary: string;
    white: string;
    black: string;
    darkGray: string;
  },
  spacing: {
    medium: string;
  },
  breakpoints: {
    mobile: string;
    smallMobile: string;
    extraSmallMobile: string;
  },
  hexToRgba: (hex: string, alpha: number) => string;
}
```

---

## Observações

- A propriedade `text` é **opcional** se você usar `children`
- Quando `loading={true}`, o texto é substituído por **"Enviando..."**
- O componente utiliza **transient props** (`$variant`) para evitar warnings de props não-HTML
- Todas as variantes possuem **transições suaves** (0.2s - 0.3s ease)
- O botão `headerMain` possui **display: inline-flex** e suporta ícones com gap automático
- Estados `disabled` e `loading` **desabilitam** automaticamente a interação do botão
- A variante `cta` possui **font-size maior** (1.2rem) para destacar a ação principal

---

# 📄 index.html — Estrutura Base & SEO Global

Este arquivo `index.html` define a **base estrutural, semântica e de SEO global** do projeto da **Consulter Soluções**.
Ele funciona como **fallback institucional** para mecanismos de busca e redes sociais, enquanto o componente `SEO.tsx` complementa e sobrescreve as informações de forma dinâmica por página.

---

## 🎯 Objetivo do index.html

- Garantir **SEO técnico inicial** antes do carregamento do React
- Definir **identidade global do site**
- Fornecer **metadados de fallback** (Home)
- Melhorar **indexação, compartilhamento social e SEO local**
- Manter compatibilidade com SPA (React + Vite)

---

## 🔹 Estrutura Geral

### 1️⃣ Metadados Básicos

```html
<meta charset="UTF-8" /> // Define a codificação de caracteres(ascentos,
símbolos e idiomas)
<meta name="viewport" content="width=device-width, initial-scale=1.0" /> //
Responsividade da página -
```

### Favicons e Identidade Visual

Define os ícones exibidos:

- Na aba do navegador
- Em favoritos
- Em atalhos mobile
- Reforça a identidade visual da marca

```html
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```

## Ferramentas utilizadas

Gera todos os formatos de imagens necessário para o projeto

- **Favicons**: https://realfavicongenerator.net

### Canonical e hreflang

- Evita conteúdo duplicado no Google
- Define a URL oficial da Home
- Informa o idioma principal do site
- Ajuda em SEO local e internacional

```html
<link rel="canonical" href="https://www.consultersolucoes.com.br/" />
<link
  rel="alternate"
  href="https://www.consultersolucoes.com.br/"
  hreflang="pt-BR"
/>
<link
  rel="alternate"
  href="https://www.consultersolucoes.com.br/"
  hreflang="x-default"
/>
```

### Open Graph — Fallback Global

- Controla como o site aparece ao ser compartilhado:
  **WhatsApp**
  **Facebook**
  **LinkedIn**
- Serve como fallback da Home
- É sobrescrito dinamicamente pelo componente SEO.tsx em cada página

### Schema.org — SEO Estruturado

- Ajuda o Google a entender o negócio
- Fortalece SEO local
- Pode gerar painel de conhecimento (Knowledge Panel)
- Integra-se melhor com Google Maps

### Google Fonts

- Define tipografia global do projeto
- Evita múltiplos carregamentos de fonte
- Garante consistência visual
- Melhora performance e UX

### Compatibilidade e Bootstrap da SPA

- Garante compatibilidade com navegadores modernos
- Evita problemas de renderização legados

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```
