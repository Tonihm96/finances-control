import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Text } from '../Text';

import { Container } from './styles';

export interface Props {
  title: string;
  content: string;
  type: 'C' | 'D';
  width?: number;
}

export function SummaryCard({ title, content, type }: Props) {
  const { width } = useWindowDimensions();

  return (
    <Container width={width} type={type}>
      <Text variant='body' mode='dark'>
        {title}
      </Text>
      <Text variant='h3' mode='dark'>
        {content}
      </Text>
    </Container>
  );
}
