import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Header } from './Header';
import { Form } from './Form';

export function Register() {
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
`;
