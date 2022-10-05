import React from 'react';
import styled from 'styled-components/native';

import { useAuth } from '../../hooks/auth';

import { Text } from '../../components/Text';
import { IconButton } from '../../components/IconButton';

export function UserInfo() {
  const { requestLogout, user } = useAuth();

  return (
    <Container>
      <Text variant='h3'>Olá, {user.username}</Text>
      <IconButton name='poweroff' onPress={() => requestLogout()} />
    </Container>
  );
}

const Container = styled.View`
  padding: ${({ theme }) => theme.sizes.medium}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
