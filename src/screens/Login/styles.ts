import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

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
  background-color: ${({ theme }) => theme.colors.background};

  width: 100%;
  height: 60%;

  padding: ${({ theme }) => theme.sizes.xlarge}px;

  border-top-left-radius: ${({ theme }) => theme.sizes.medium}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.medium}px;
`;

export const InputGroup = styled.View`
  width: 100%;

  margin-bottom: ${({ theme }) => theme.sizes.small}px;

  flex-direction: column;
`;

export const ButtonContainer = styled.View`
  margin: ${({ theme }) => theme.sizes.small}px 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
