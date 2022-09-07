import styled from 'styled-components/native';

import { Props } from '.';

export const Container = styled.TextInput`
  padding: ${({ theme }) => theme.sizes.small}px;

  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.minimum}px;
  border-width: 1px;
`;
