import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Header } from './Header';
import { Form } from './Form';

export function Login() {
  return (
    <Container>
      <Header />
      <Form />
      <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent />
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  padding-top: ${getStatusBarHeight()}px;

  flex: 1;
  justify-content: flex-end;
`;
