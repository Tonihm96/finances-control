import React, { ReactNode } from 'react';

import { TextContainer } from './styles';

export interface TextProps {
  children: ReactNode;
  transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'subtitle' | 'legend';
}

export function Text({
  children,
  transform = 'none',
  variant = 'body'
}: TextProps) {
  return (
    <TextContainer transform={transform} variant={variant}>
      {children}
    </TextContainer>
  );
}
