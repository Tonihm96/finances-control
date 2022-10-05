import React from 'react';
import styled from 'styled-components/native';

import { Text } from '../../components/Text';
import { Divider } from '../../components/Divider';

export function Summary() {
  return (
    <Container>
      <ValueContainer>
        <Text variant='h3' mode='light'>
          Crédito
        </Text>
        <Text variant='h3' mode='light'>
          + R$ 1.000,00
        </Text>
      </ValueContainer>
      <Divider orientation='vertical' color='background' />
      <ValueContainer>
        <Text variant='h3' mode='light'>
          Débito
        </Text>
        <Text variant='h3' mode='light'>
          - R$ 1.000,00
        </Text>
      </ValueContainer>
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  padding-top: ${({ theme }) => theme.sizes.large}px;

  padding-bottom: ${({ theme }) => theme.sizes.large * 2}px;
  margin-bottom: -${({ theme }) => theme.sizes.large}px;

  border-top-left-radius: ${({ theme }) => theme.sizes.medium}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.medium}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ValueContainer = styled.View`
  padding: 0 ${({ theme }) => theme.sizes.medium}px;

  flex: 1;
  align-items: center;
`;
