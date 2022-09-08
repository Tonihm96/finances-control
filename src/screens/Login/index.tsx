import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components/native';
import { useAuth } from '../../hooks/auth';

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
  const theme = useTheme();
  const { requestLogin, loading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <LogoContainer>
        <Text variant='h1' color='white'>
          Logo
        </Text>
      </LogoContainer>
      <FormContainer>
        <InputGroup>
          <Text>Usuário</Text>
          <TextInput editable={!loading} onChangeText={setUsername} />
        </InputGroup>
        <InputGroup>
          <Text>Senha</Text>
          <TextInput
            editable={!loading}
            secureTextEntry
            onChangeText={setPassword}
          />
        </InputGroup>
        <ButtonContainer>
          <Button enabled={!loading} type='outlined'>
            Criar conta
          </Button>
          <Spacer size='medium' side='left' />
          <Button
            enabled={!loading}
            type='contained'
            onPress={() => requestLogin(username, password)}
          >
            {loading ? (
              <ActivityIndicator size={22} color={theme.colors.background} />
            ) : (
              'Entrar'
            )}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}
