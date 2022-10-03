import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Text } from '../Text';

import { Container, Indicator, ContentContainer } from './styles';

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
      <Indicator type={type} />
      <ContentContainer>
        <Text variant='legend'>{title}</Text>
        <Text variant='body'>{content}</Text>
      </ContentContainer>
    </Container>
  );
}
