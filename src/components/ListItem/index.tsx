import React from 'react';
import { format } from 'date-fns';
import {
  Container,
  Icon,
  LeftContainer,
  RightContainer,
  Value
} from './styles';

import { Text } from '../../components/Text';

interface Props {
  title: string;
  value: string;
  date: string;
  credDeb: string | 'C' | 'D';
}

export function ListItem({ title, value, date, credDeb }: Props) {
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
        <Icon
          name={credDeb === 'C' ? 'arrow-up' : 'arrow-down'}
          credDeb={credDeb}
        />
      </RightContainer>
    </Container>
  );
}
