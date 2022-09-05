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
      <Text variant='subtitle'>{title}</Text>
      <Text variant='h3'>{content}</Text>
    </Container>
  );
}
