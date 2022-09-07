import React from 'react';

import { Text } from '../../components/Text';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { Spacer } from '../../components/Spacer';

import {
  Container,
  LogoContainer,
  FormContainer,
  InputGroup,
  ButtonContainer
} from './styles';

export function Login() {
  return (
    <Container>
      <LogoContainer>
        <Text variant='h1' color='white'>
          Logo
        </Text>
      </LogoContainer>
      <FormContainer>
        <InputGroup>
          <Text>Login</Text>
          <TextInput />
        </InputGroup>
        <InputGroup>
          <Text>Senha</Text>
          <TextInput />
        </InputGroup>
        <ButtonContainer>
          <Button type='outlined'>Criar conta</Button>
          <Spacer size='medium' side='left' />
          <Button>Login</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}
