import React from 'react';
import styled from 'styled-components/native';

import { Text } from '../../components/Text';

export function Header() {
  return (
    <Container>
      <Text variant='h1'>Logo</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
