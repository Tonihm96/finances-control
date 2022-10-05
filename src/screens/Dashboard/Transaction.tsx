import React from 'react';
import styled from 'styled-components/native';
import { Foundation } from '@expo/vector-icons';
import { format } from 'date-fns';

import { Text } from '../../components/Text';

interface Props {
  title: string;
  value: string;
  date: string;
  credDeb: string | 'C' | 'D';
}

interface TransactionType {
  credDeb: 'C' | 'D';
}

export function Transaction({ title, value, date, credDeb }: Props) {
  const formattedValue = String(Number(value).toFixed(2)).replace('.', ',');
  const formattedDate = format(Date.parse(date.slice(0, 10)), 'dd/MM/yyyy');

  return (
    <Container>
      <LeftContainer>
        <Text transform='capitalize'>{title}</Text>
        <Text variant='subtitle'>{formattedDate}</Text>
      </LeftContainer>
      <RightContainer>
        <Value credDeb={credDeb}>
          R$ {credDeb === 'D' && '-'}
          {formattedValue}
        </Value>
        <Icon name={credDeb === 'C' ? 'arrow-up' : 'arrow-down'} credDeb={credDeb} />
      </RightContainer>
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  width: 100%;
  padding: 15px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const LeftContainer = styled.View`
  flex-direction: column;
`;

const RightContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Value = styled.Text<TransactionType>`
  font-size: ${({ theme }) => theme.font_sizes.medium}px;
  color: ${({ theme, credDeb }) => (credDeb == 'C' ? theme.colors.success : theme.colors.error)};
`;

const Icon = styled(Foundation)<TransactionType>`
  font-size: ${({ theme }) => theme.font_sizes.large}px;
  color: ${({ theme, credDeb }) => (credDeb == 'C' ? theme.colors.success : theme.colors.error)};

  margin-left: 10px;
`;
