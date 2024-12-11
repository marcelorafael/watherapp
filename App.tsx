import { StatusBar } from 'react-native';
// import { ThemeProvider } from 'theme/Theme';
import { ThemeProvider } from 'styled-components/native';

import light from './src/theme/light';
import HomePresentation from './src/pages/HomePresentation'

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar hidden showHideTransition="fade" />
      <HomePresentation />
    </ThemeProvider>
  );
}