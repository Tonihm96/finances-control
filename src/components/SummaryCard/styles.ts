import styled, { css } from 'styled-components/native';

import { Props } from '.';

export const Container = styled.View<Props>`
  background-color: ${({ theme }) => theme.colors.background};

  width: ${({ width }) => width! * 0.4}px;
  padding: ${({ theme }) => theme.sizes.small}px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Indicator = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === 'C' ? theme.colors.primary : theme.colors.secondary};

  padding: ${({ theme }) => theme.sizes.minimum}px;
  margin-right: ${({ theme }) => theme.sizes.small}px;
  border-radius: ${({ theme }) => theme.sizes.small}px;
`;

export const ContentContainer = styled.View``;
