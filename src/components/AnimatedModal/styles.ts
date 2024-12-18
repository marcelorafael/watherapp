import { Animated } from "react-native";
import styled from "styled-components/native";

// Estilos com styled-components
export const Backdrop = styled(Animated.View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #555;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  shadow-color: #000;
  /* shadow-offset: { width: 0, height: 2 }; */
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;