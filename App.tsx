import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import light from './src/theme/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <View />
    </ThemeProvider>
  );
}