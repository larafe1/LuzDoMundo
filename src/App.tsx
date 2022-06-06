import { Main } from '@/pages';
import { AppProvider } from '@/providers';
import { GlobalStyle } from '@/styles';

const App = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Main />
    </AppProvider>
  );
};

export default App;
