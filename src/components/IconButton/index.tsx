import React from 'react';

import { Container } from './styles';

import { Icon, Props as IconPrpos } from '../Icon';

interface Props extends IconPrpos {
  onPress(): void;
}

export function IconButton({ name, color, size, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Icon name={name} color={color} size={size} />
    </Container>
  );
}
