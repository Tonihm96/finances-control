import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import { Text } from '../Text';

import { Container, Content } from './styles';

export interface Props extends RectButtonProps {
  children: ReactNode;
  type?: 'text' | 'outlined' | 'contained';
  onPress?(): void;
}

export function Button({ children, type, onPress, ...rest }: Props) {
  const theme = useTheme();

  function assignColor() {
    const parsedType = type ? type : 'text';

    switch (parsedType) {
      case 'contained':
        return theme.colors.background;
      case 'outlined':
        return theme.colors.primary;
      case 'text':
        return undefined;
    }
  }

  return (
    <Container type={type} onPress={onPress} {...rest}>
      <Content type={type}>
        <Text transform='capitalize' color={assignColor()}>
          {children}
        </Text>
      </Content>
    </Container>
  );
}
