import packageJson from '../package.json';

export const APP_VERSION = packageJson.version;

console.info(
  `Grupo JPM - Versão ${APP_VERSION} - Build ${new Date().toLocaleString('pt-BR')}`
);

//tsconfig.app.json
//Inserido as seguintes linhas dentro de "compilerOptions": "resolveJsonModule": true, "esModuleInterop": true
//No Footer.tsx: import { APP_VERSION } from '../../version';
// <small>Versão {APP_VERSION}</small>
//Desta forma, quando for alterar a versão basta mudar no arquivo package.json
