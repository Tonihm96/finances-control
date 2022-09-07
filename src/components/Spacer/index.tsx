import React, { ReactNode } from 'react';

import { Container } from './styles';

export interface Props {
  children?: ReactNode;
  side?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'horizontal'
    | 'vertical'
    | 'all';
  size: 'minimum' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
}

export function Spacer({ children, side, size }: Props) {
  return (
    <Container size={size} side={side}>
      {children}
    </Container>
  );
}
