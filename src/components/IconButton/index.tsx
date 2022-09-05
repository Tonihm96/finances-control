import React from 'react';

import { Container } from './styles';

import { Icon, Props as IconPrpos } from '../Icon';

interface Props extends IconPrpos {
  onPress(): void;
}

export function IconButton({ name, iconColor, iconSize, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Icon name={name} iconColor={iconColor} iconSize={iconSize} />
    </Container>
  );
}
