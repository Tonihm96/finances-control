import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryScatter
} from 'victory-native';

import { ChartContainer } from './styles';

interface Props {
  data: Array<Object>;
}

export function AreaChart({ data }: Props) {
  const theme = useTheme();
  const { height, width } = useWindowDimensions();
  const data1 = [
    { x: new Date(2022, 9, 1), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 2), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 3), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 4), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 5), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 6), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 7), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 8), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 9), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 10), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 11), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 12), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 13), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 14), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 15), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 16), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 17), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 18), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 19), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 20), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 21), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 22), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 23), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 24), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 25), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 26), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 27), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 28), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 29), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 30), y: Math.random() * 10000 }
  ];
  const data2 = [
    { x: new Date(2022, 9, 1), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 2), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 3), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 4), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 5), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 6), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 7), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 8), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 9), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 10), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 11), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 12), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 13), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 14), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 15), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 16), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 17), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 18), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 19), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 20), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 21), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 22), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 23), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 24), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 25), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 26), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 27), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 28), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 29), y: Math.random() * 10000 },
    { x: new Date(2022, 9, 30), y: Math.random() * 10000 }
  ];

  return (
    <ChartContainer horizontal height={height}>
      <VictoryChart
        padding={{ top: 0, bottom: 30, left: 50, right: 50 }}
        //                   L    R        B   T
        domainPadding={{ x: [0, 0], y: [50, 50] }}
        height={height / 3}
        width={width * 10}
      >
        <VictoryArea
          data={data1}
          style={{
            data: {
              opacity: 0.25,
              fill: theme.colors.primary,
              stroke: theme.colors.primary,
              strokeWidth: 3,
              strokeOpacity: 4
            }
          }}
          labels={({ datum }) => datum.y}
          interpolation='monotoneX'
        />
        <VictoryScatter data={data1} />

        <VictoryArea
          data={data2}
          style={{
            data: {
              opacity: 0.25,
              fill: theme.colors.secondary,
              stroke: theme.colors.secondary,
              strokeWidth: 3,
              strokeOpacity: 4
            }
          }}
          labels={({ datum }) => datum.y}
          interpolation='monotoneX'
        />
        <VictoryScatter data={data2} />
      </VictoryChart>
    </ChartContainer>
  );
}
