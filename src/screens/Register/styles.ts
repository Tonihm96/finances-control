import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  padding-top: ${getStatusBarHeight()}px;

  flex: 1;
`;

export const BackButtonContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LogoContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  flex: 1;

  padding: ${({ theme }) => theme.sizes.xlarge}px;

  border-top-left-radius: ${({ theme }) => theme.sizes.medium}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.medium}px;
`;

export const InputGroup = styled.View`
  margin-bottom: ${({ theme }) => theme.sizes.small}px;

  flex-direction: column;
`;
