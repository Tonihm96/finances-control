import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryScatter,
  VictoryLabel
} from 'victory-native';

import { ChartContainer } from './styles';

interface Props {
  data: Array<Object>;
}

export function AreaChart({ data }: Props) {
  const theme = useTheme();
  const { height, width } = useWindowDimensions();
  const income = [
    { x: new Date(2022, 9, 1), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 2), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 3), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 4), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 5), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 6), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 7), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 8), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 9), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 10), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 11), y: 1500 + Math.random() * 100 },
    { x: new Date(2022, 9, 12), y: 1500 + Math.random() * 100 }
  ];
  const expenses = [
    { x: new Date(2022, 9, 1), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 2), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 3), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 4), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 5), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 6), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 7), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 8), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 9), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 10), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 11), y: 1000 + Math.random() * 500 },
    { x: new Date(2022, 9, 12), y: 1000 + Math.random() * 500 }
  ];

  return (
    <ChartContainer>
      <VictoryChart padding={50} maxDomain={{ y: 2500 }} scale={{ x: 'time' }}>
        <VictoryArea
          data={income}
          style={{
            data: {
              opacity: 0.25,
              fill: theme.colors.primary,
              stroke: theme.colors.primary,
              strokeWidth: 3,
              strokeOpacity: 4
            }
          }}
          interpolation='monotoneX'
        />
        <VictoryArea
          data={expenses}
          style={{
            data: {
              opacity: 0.25,
              fill: theme.colors.secondary,
              stroke: theme.colors.secondary,
              strokeWidth: 3,
              strokeOpacity: 4
            }
          }}
          interpolation='monotoneX'
        />
        <VictoryLabel x={income[8].x} y={income[8].y} text='teste' />
      </VictoryChart>
    </ChartContainer>
  );
}
