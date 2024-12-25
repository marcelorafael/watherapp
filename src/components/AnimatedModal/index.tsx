import React, { useEffect, useRef } from 'react';
import { Animated, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from '@react-native-vector-icons/ant-design';

import styled from 'styled-components/native';
import * as S from './styles';

// Tipagem das propriedades
interface AnimatedModalProps {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

// Componente principal
const AnimatedModal: React.FC<AnimatedModalProps> = ({ visible, onClose, children }) => {
  const opacity = useRef(new Animated.Value(0)).current; // Animação de opacidade
  const translateY = useRef(new Animated.Value(50)).current; // Animação de deslocamento vertical

  // Efeito para controlar animações ao abrir/fechar
  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 50,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <S.Backdrop style={{ opacity }} />
      </TouchableWithoutFeedback>
      <S.Container style={{ transform: [{ translateY }], opacity }}>
        <Icon name='close' color='white' size={30} onPress={onClose} />
        {children}
      </S.Container>
    </Modal>
  );
};

export default AnimatedModal;


