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

### Componente `Hero`

Componente de banner principal (hero section) utilizado na página inicial do site. Apresenta título, subtítulo e botões de call-to-action sobre uma imagem de fundo impactante.

#### Local de Uso
- Importado e utilizado na page Home (`Home.tsx`)

#### 🎨 Características

- **Responsivo**: Adaptado para desktop, tablet e mobile
- **Background dinâmico**: Imagem de fundo com overlay escuro para melhor legibilidade
- **Botões interativos**: Efeitos hover e active states
- **Tipografia escalável**: Tamanhos de fonte ajustados por breakpoint
- **Acessível**: Estrutura semântica com `<section>` e headings adequados
- **Imagem**: A imagem é inserida no arquivo de styled component (`heto.styles.ts`)
