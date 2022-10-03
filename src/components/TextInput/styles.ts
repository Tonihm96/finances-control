import styled from 'styled-components/native';

import { Props } from '.';

export const TextInputComponent = styled.TextInput<Props>`
  opacity: ${({ editable }) => (editable ? 1 : 0.5)};
  background-color: ${({ theme, editable }) => (editable === false ? theme.colors.disabled_light : theme.colors.background)};

  padding: ${({ theme }) => theme.sizes.small}px;

  border-color: ${({ theme, editable }) => (editable === false ? theme.colors.disabled : theme.colors.primary)};
  border-radius: ${({ theme }) => theme.sizes.minimum}px;
  border-width: 1px;
`;
