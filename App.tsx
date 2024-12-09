import { Text, View } from 'react-native';
// import { ThemeProvider } from 'theme/Theme';
import { ThemeProvider } from 'styled-components/native';

import light from './src/theme/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <View />
    </ThemeProvider>
  );
}