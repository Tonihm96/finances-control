import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components/native';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

import { AuthStackProps } from '../../routes/Models';
import { Text } from '../../components/Text';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { Spacer } from '../../components/Spacer';

export function Form() {
  const { colors } = useTheme();
  const { navigate } = useNavigation<AuthStackProps>();
  const { requestLogin, loading } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  padding: ${({ theme }) => theme.sizes.xlarge}px;

  border-top-left-radius: ${({ theme }) => theme.sizes.medium}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.medium}px;

  flex: 1.5;
`;

const InputGroup = styled.View`
  margin-bottom: ${({ theme }) => theme.sizes.small}px;

  flex-direction: column;
`;
