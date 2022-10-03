import React, { useState } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AuthStackProps } from '../../routes/Models';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { useAuth } from '../../hooks/auth';

import { Text } from '../../components/Text';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { Spacer } from '../../components/Spacer';

import { Container, BackButtonContainer, LogoContainer, FormContainer, InputGroup } from './styles';
import { IconButton } from '../../components/IconButton';

export function Register() {
  const { colors } = useTheme();
  const { goBack } = useNavigation<AuthStackProps>();
  const { requestRegister, loading } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  function handleRegister() {
    if (password === repeatedPassword) {
      requestRegister(username, email, password);
    } else Alert.alert('As duas senhas devem estar iguais.');
  }

  return (
    <Container>
      <BackButtonContainer>
        <IconButton name='left' color='body' onPress={goBack} />
      </BackButtonContainer>
      <LogoContainer>
        <Text variant='h1'>Logo</Text>
      </LogoContainer>
      <FormContainer>
        <InputGroup>
          <Text>Usuário</Text>
          <TextInput editable={!loading} onChangeText={setUsername} placeholder='usuario' />
        </InputGroup>
        <InputGroup>
          <Text>E-mail</Text>
          <TextInput editable={!loading} onChangeText={setEmail} placeholder='email@dominio.com' />
        </InputGroup>
        <InputGroup>
          <Text>Senha</Text>
          <TextInput editable={!loading} secureTextEntry onChangeText={setPassword} placeholder='senha' />
        </InputGroup>
        <InputGroup>
          <Text>Confirmar senha</Text>
          <TextInput editable={!loading} secureTextEntry onChangeText={setRepeatedPassword} placeholder='senha' />
        </InputGroup>
        <Spacer size='medium' side='top' />
        <Button enabled={!loading} type='contained' onPress={handleRegister}>
          {loading ? <ActivityIndicator size={RFValue(19)} color={colors.background} /> : 'Cadastrar'}
        </Button>
      </FormContainer>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent />
    </Container>
  );
}
