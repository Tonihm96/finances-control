import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';

import { TextContainer } from './styles';

export interface Props extends TextProps {
  children: ReactNode;
  /**
   * - `capitalize`
   * - `uppercase`
   * - `lowercase`
   * - `none`
   */
  transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  /**
   * - `h1` - Título 1
   * - `h2` - Título 2
   * - `h3` - Título 3
   * - `body` - Texto padrão
   * - `subtitle` - Subtítulo (cor cinza)
   * - `legend` - Legenda (cor cinza)
   */
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'subtitle' | 'legend';
  color?: string | undefined;
}

/**
 * Componente de texto com estilização padrão
 * @author Antonio
 */
export function Text({
  children,
  transform = 'none',
  variant = 'body',
  color,
  ...rest
}: Props) {
  return (
    <TextContainer
      transform={transform}
      variant={variant}
      color={color}
      {...rest}
    >
      {children}
    </TextContainer>
  );
}
