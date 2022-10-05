import React from 'react';
import styled from 'styled-components/native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { IconButton } from '../../components/IconButton';
import { Text } from '../../components/Text';

interface Props {
  currentDate: Date;
  next(): void;
  previous(): void;
}

export function PeriodSelector({ currentDate, next, previous }: Props) {
  return (
    <Container>
      <IconButton name='left' onPress={previous} />
      <PeriodContainer>
        <Text variant='h2' transform='capitalize'>
          {format(currentDate, 'LLLL, yyyy', { locale: ptBR })}
        </Text>
      </PeriodContainer>
      <IconButton name='right' onPress={next} />
    </Container>
  );
}

const Container = styled.View`
  padding: 0 ${({ theme }) => theme.sizes.large}px;
  margin-bottom: ${({ theme }) => theme.sizes.large}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PeriodContainer = styled.View`
  justify-content: space-between;
  align-items: center;
`;
