import { Text, View } from 'react-native';
// import { ThemeProvider } from 'theme/Theme';
import { ThemeProvider } from 'styled-components/native';

import light from './src/theme/light';
import Home from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Home />
    </ThemeProvider>
  );
}