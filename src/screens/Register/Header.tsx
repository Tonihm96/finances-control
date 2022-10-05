import React from 'react';
import styled from 'styled-components/native';
import { AuthStackProps } from '../../routes/Models';

import { useNavigation } from '@react-navigation/native';

import { IconButton } from '../../components/IconButton';
import { Text } from '../../components/Text';

export function Header() {
  const { goBack } = useNavigation<AuthStackProps>();
  return (
    <Container>
      <BackButtonContainer>
        <IconButton name='left' color='body' onPress={goBack} />
      </BackButtonContainer>
      <LogoContainer>
        <Text variant='h1'>Logo</Text>
      </LogoContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 0.5;
`;

const BackButtonContainer = styled.View`
  position: absolute;

  justify-content: flex-start;
  align-items: flex-start;
`;

const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
