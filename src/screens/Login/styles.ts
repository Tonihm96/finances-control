import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  padding-top: ${getStatusBarHeight()}px;

  flex: 1;
  justify-content: flex-end;
`;

export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  padding: ${({ theme }) => theme.sizes.xlarge}px;

  border-top-left-radius: ${({ theme }) => theme.sizes.medium}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.medium}px;

  flex: 1.5;
`;

export const InputGroup = styled.View`
  margin-bottom: ${({ theme }) => theme.sizes.small}px;

  flex-direction: column;
`;
