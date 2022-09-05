import styled, { css } from 'styled-components/native';

import { Props } from '.';

export const Container = styled.View<Props>`
  background-color: ${({ theme }) => theme.colors.outline};

  width: ${({ width }) => width! * 0.4}px;
  padding: ${({ theme }) => theme.sizes.medium}px;
  margin: ${({ theme }) => theme.sizes.small}px;
  ${({ type }) =>
    type === 'C' &&
    css`
      border-left-width: ${({ theme }) => theme.sizes.small}px;
      border-left-color: ${({ theme }) => theme.colors.success};
    `}

  ${({ type }) =>
    type === 'D' &&
    css`
      border-right-width: ${({ theme }) => theme.sizes.small}px;
      border-right-color: ${({ theme }) => theme.colors.error};
    `}
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
