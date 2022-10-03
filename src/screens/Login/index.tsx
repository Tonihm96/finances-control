import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AuthStackProps } from '../../routes/Models';

import { useTheme } from 'styled-components/native';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../components/Text';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { Spacer } from '../../components/Spacer';

import { Container, LogoContainer, FormContainer, InputGroup } from './styles';

export function Login() {
  const { colors } = useTheme();
  const { navigate } = useNavigation<AuthStackProps>();
  const { requestLogin, loading } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <LogoContainer>
        <Text variant='h1'>Logo</Text>
      </LogoContainer>
      <FormContainer>
        <InputGroup>
          <Text>Usuário ou E-mail</Text>
          <TextInput editable={!loading} onChangeText={setUsername} />
        </InputGroup>
        <InputGroup>
          <Text>Senha</Text>
          <TextInput editable={!loading} secureTextEntry onChangeText={setPassword} />
        </InputGroup>
        <Spacer size='medium' side='top' />
        <Button enabled={!loading} type='contained' onPress={() => requestLogin(username, password)}>
          {loading ? <ActivityIndicator size={RFValue(19)} color={colors.background} /> : 'Entrar'}
        </Button>
        <Spacer size='small' side='top' />
        <Button enabled={!loading} type='outlined' onPress={() => navigate('Register')}>
          Criar conta
        </Button>
      </FormContainer>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent />
    </Container>
  );
}
