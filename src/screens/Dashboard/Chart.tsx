import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { VictoryChart, VictoryArea, VictoryLine, VictoryLabel, VictoryAxis } from 'victory-native';
import { format } from 'date-fns';

interface Props {
  data: { x: Date; y: number }[];
}

export function Chart({ data }: Props) {
  const { colors } = useTheme();

  const maxChartDomainY = Math.max(...data.map(item => item.y));

  const dateLabels = [new Date(2022, 9, 5), new Date(2022, 9, 10), new Date(2022, 9, 15), new Date(2022, 9, 20), new Date(2022, 9, 25)];

  function tickFormat(value: Date) {
    return format(value, 'dd/MM');
  }

  return (
    <VictoryChart
      animate={{ duration: 300 }}
      maxDomain={{ y: maxChartDomainY + maxChartDomainY * 0.2 }}
      minDomain={{ y: -10 }}
      padding={{ bottom: 30 }}
      height={200}
    >
      <Defs>
        <LinearGradient x1='0%' y1='0%' x2='0%' y2='100%' id='chartGradient'>
          <Stop offset='0%' stopColor={colors.primary} />
          <Stop offset='100%' stopColor={colors.background} />
        </LinearGradient>
      </Defs>
      <VictoryArea interpolation='monotoneX' style={{ data: { fill: 'url(#chartGradient)', stroke: colors.primary, strokeWidth: 3 } }} data={data} />
      <VictoryAxis style={{ axis: { stroke: 'none' } }} dependentAxis />
      <VictoryAxis tickValues={dateLabels} scale='time' style={{ axis: { stroke: 'none' } }} tickFormat={tickFormat} />
    </VictoryChart>
  );
}
