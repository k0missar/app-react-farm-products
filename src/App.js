import React from 'react';
import { ThemeProvider } from 'styled-components';
import MeinPage from './components/page/mein-page/mein-page';
import { DefaultTheme } from './components/theme/default-theme';

function App() {
  return (    
    <ThemeProvider theme={DefaultTheme}>
      <MeinPage />
    </ThemeProvider>
  );
}

export default App;
