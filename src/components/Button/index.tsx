import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components/native';

import { Text } from '../Text';

import { Container, Content } from './styles';

export interface Props {
  children: ReactNode;
  type?: 'text' | 'outlined' | 'contained';
  onPress?(): void;
}

export function Button({ children, type, onPress }: Props) {
  const theme = useTheme();

  function assignColor() {
    const parsedType = type ? type : 'contained';

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
    <Container type={type} onPress={onPress}>
      <Content type={type}>
        <Text transform='capitalize' color={assignColor()}>
          {children}
        </Text>
      </Content>
    </Container>
  );
}
