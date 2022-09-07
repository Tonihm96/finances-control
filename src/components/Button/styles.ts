import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { Props } from '.';

export const Container = styled(RectButton)<Props>`
  ${({ type }) =>
    type === 'contained' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
  ${({ type }) =>
    type === 'outlined' &&
    css`
      background-color: ${({ theme }) => theme.colors.background};
    `}
${({ type }) =>
    type === 'text' &&
    css`
      background-color: transparent;
    `}
${({ type }) =>
    !type &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
  
  border-radius: ${({ theme }) => theme.sizes.minimum}px;

  flex: 1;
`;

export const Content = styled.View<Props>`
  ${({ type }) =>
    type === 'contained' &&
    css`
      border-color: ${({ theme }) => theme.colors.primary};
    `}
  ${({ type }) =>
    type === 'outlined' &&
    css`
      border-color: ${({ theme }) => theme.colors.primary};
    `}
${({ type }) =>
    type === 'text' &&
    css`
      border-color: transparent;
    `}
${({ type }) =>
    !type &&
    css`
      border-color: ${({ theme }) => theme.colors.primary};
    `}

  border-radius: ${({ theme }) => theme.sizes.minimum}px;
  border-width: 1px;

  padding: ${({ theme }) => theme.sizes.small}px
    ${({ theme }) => theme.sizes.small * 2}px;

  justify-content: center;
  align-items: center;
`;
