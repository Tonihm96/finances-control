import React from 'react';
import { VictoryArea } from 'victory-native';

interface Props {
  data: Array<Object>;
}

export function AreaChart({ data }: Props) {
  return <VictoryArea />;
}
