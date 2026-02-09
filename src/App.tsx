import { GlobalStyle } from './assets/style/global';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
