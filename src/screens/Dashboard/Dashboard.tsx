import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { add } from 'date-fns';

import { UserInfo } from './UserInfo';
import { PeriodSelector } from './PeriodSelector';
import { Chart } from './Chart';
import { Summary } from './Highlights';
import { TransactionHistory } from './TransactionHistory';

export function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDate = () => (Math.random() > 0.5 ? Math.random() * 500 : 0);

  const expenses = [
    { x: new Date(2022, 9, 1), y: getDate() },
    { x: new Date(2022, 9, 2), y: getDate() },
    { x: new Date(2022, 9, 3), y: getDate() },
    { x: new Date(2022, 9, 4), y: getDate() },
    { x: new Date(2022, 9, 5), y: getDate() },
    { x: new Date(2022, 9, 6), y: getDate() },
    { x: new Date(2022, 9, 7), y: getDate() },
    { x: new Date(2022, 9, 8), y: getDate() },
    { x: new Date(2022, 9, 9), y: getDate() },
    { x: new Date(2022, 9, 10), y: getDate() },
    { x: new Date(2022, 9, 11), y: getDate() },
    { x: new Date(2022, 9, 12), y: getDate() },
    { x: new Date(2022, 9, 13), y: getDate() },
    { x: new Date(2022, 9, 14), y: getDate() },
    { x: new Date(2022, 9, 15), y: getDate() },
    { x: new Date(2022, 9, 16), y: getDate() },
    { x: new Date(2022, 9, 17), y: getDate() },
    { x: new Date(2022, 9, 18), y: getDate() },
    { x: new Date(2022, 9, 19), y: getDate() },
    { x: new Date(2022, 9, 20), y: getDate() },
    { x: new Date(2022, 9, 21), y: getDate() },
    { x: new Date(2022, 9, 22), y: getDate() },
    { x: new Date(2022, 9, 23), y: getDate() },
    { x: new Date(2022, 9, 24), y: getDate() },
    { x: new Date(2022, 9, 25), y: getDate() },
    { x: new Date(2022, 9, 26), y: getDate() },
    { x: new Date(2022, 9, 27), y: getDate() },
    { x: new Date(2022, 9, 28), y: getDate() },
    { x: new Date(2022, 9, 29), y: getDate() },
    { x: new Date(2022, 9, 30), y: getDate() }
  ];

  function handleNextMonth() {
    setCurrentDate(add(currentDate, { months: 1 }));
  }

  function handlePreviousMonth() {
    setCurrentDate(add(currentDate, { months: -1 }));
  }

  return (
    <Container>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent />
      <Header>
        <UserInfo />
        <PeriodSelector currentDate={currentDate} next={handleNextMonth} previous={handlePreviousMonth} />
        <Chart data={expenses} />
      </Header>
      <Summary />
      <TransactionHistory />
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  flex: 1;
`;

const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  padding-top: ${({ theme }) => theme.sizes.small + getStatusBarHeight()}px;
  margin-bottom: ${({ theme }) => theme.sizes.large}px;

  flex: 1.25;
  justify-content: space-between;
`;
