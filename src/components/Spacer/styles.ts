import styled, { css } from 'styled-components/native';

import { Props } from '.';

export const Container = styled.View<Props>`
  ${({ side }) =>
    side === 'all' &&
    css<Props>`
      margin: ${({ theme, size }) => theme.sizes[size]}px;
    `}

  ${({ side }) =>
    side === 'horizontal' &&
    css<Props>`
      margin: 0 ${({ theme, size }) => theme.sizes[size]}px;
    `}
    
${({ side }) =>
    side === 'vertical' &&
    css<Props>`
      margin: ${({ theme, size }) => theme.sizes[size]}px 0;
    `}
    
${({ side }) =>
    side === 'top' &&
    css<Props>`
      margin-top: ${({ theme, size }) => theme.sizes[size]}px;
    `}
    
${({ side }) =>
    side === 'bottom' &&
    css<Props>`
      margin-bottom: ${({ theme, size }) => theme.sizes[size]}px;
    `}
    
${({ side }) =>
    side === 'left' &&
    css<Props>`
      margin-left: ${({ theme, size }) => theme.sizes[size]}px;
    `}
    
${({ side }) =>
    side === 'right' &&
    css<Props>`
      margin-right: ${({ theme, size }) => theme.sizes[size]}px;
    `}
`;
