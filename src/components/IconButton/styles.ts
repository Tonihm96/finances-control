import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled(BorderlessButton)`
  padding: ${({ theme }) => theme.sizes.medium}px;
`;
