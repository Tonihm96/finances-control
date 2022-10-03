import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ListRenderItemInfo, StatusBar } from 'react-native';
import { VictoryChart, VictoryBar, VictoryLine, VictoryArea, VictoryLabel, VictoryTheme, VictoryAxis } from 'victory-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { add, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useTheme } from 'styled-components/native';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { Transaction, useTransactions } from '../../hooks/transactions';

import {
  Container,
  HeaderContainer,
  UserInfo,
  PeriodSelector,
  PeriodInfo,
  CardsContainer,
  Summary,
  History,
  HistoryContainer,
  HistoryTitleContainer
} from './styles';

import { ListItem } from '../../components/ListItem';
import { Text } from '../../components/Text';
import { Divider } from '../../components/Divider';
import { IconButton } from '../../components/IconButton';

export function Dashboard() {
  const { colors, sizes } = useTheme();
  const { navigate } = useNavigation();
  const { requestLogout } = useAuth();
  const { transactions, loading, requestRecentTransactions } = useTransactions();

  const [currentDate, setCurrentDate] = useState(new Date());

  const getDate = () => (Math.random() > 0.5 ? Math.random() * 500 : 0);

  const income = [
    { x: new Date(2022, 5, 1), y: 1500 + Math.random() * 150 },
    { x: new Date(2022, 6, 1), y: 1500 + Math.random() * 150 },
    { x: new Date(2022, 7, 1), y: 1500 + Math.random() * 150 },
    { x: new Date(2022, 8, 1), y: 1500 + Math.random() * 150 },
    { x: new Date(2022, 9, 1), y: 1500 + Math.random() * 150 },
    { x: new Date(2022, 10, 1), y: 1500 + Math.random() * 150 }
  ];
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

  const maxChartDomainY = Math.max(...expenses.map(item => item.y)) + 10;

  const dateLabels = [new Date(2022, 9, 5), new Date(2022, 9, 10), new Date(2022, 9, 15), new Date(2022, 9, 20), new Date(2022, 9, 25)];

  function renderItem({ item }: ListRenderItemInfo<Transaction>) {
    return <ListItem title={item.description} value={item.value} date={item.date} credDeb={item.cred_deb} />;
  }

  function keyExtractor(item: Transaction) {
    return item.id;
  }

  useEffect(() => {
    requestRecentTransactions();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <UserInfo>
          <Text variant='h3'>Olá, Corno</Text>
          <IconButton name='poweroff' onPress={() => requestLogout()} />
        </UserInfo>

        <PeriodSelector>
          <IconButton name='left' onPress={() => setCurrentDate(add(currentDate, { months: -1 }))} />
          <PeriodInfo>
            <Text variant='h2' transform='capitalize'>
              {format(currentDate, 'LLLL, yyyy', { locale: ptBR })}
            </Text>
          </PeriodInfo>
          <IconButton name='right' onPress={() => setCurrentDate(add(currentDate, { months: 1 }))} />
        </PeriodSelector>

        <VictoryChart animate={{ duration: 300 }} minDomain={{ y: -10 }} maxDomain={{ y: maxChartDomainY }} padding={{ bottom: 50 }} height={140}>
          <Defs>
            <LinearGradient x1='0%' y1='0%' x2='0%' y2='100%' id='chartGradient'>
              <Stop offset='0%' stopColor={colors.primary} />
              <Stop offset='100%' stopColor={colors.background} />
            </LinearGradient>
          </Defs>
          <VictoryArea
            interpolation='monotoneX'
            style={{
              data: {
                fill: 'url(#chartGradient)',
                fillOpacity: 0.5,
                stroke: colors.primary,
                strokeOpacity: 2,
                strokeWidth: 2
              }
            }}
            data={expenses}
          />
          <VictoryAxis style={{ axis: { stroke: 'none' } }} dependentAxis />
          <VictoryAxis
            tickValues={dateLabels}
            scale='time'
            style={{ axis: { stroke: 'none' } }}
            tickLabelComponent={<VictoryLabel />}
            tickFormat={value => format(value, 'dd/MM')}
          />
        </VictoryChart>
      </HeaderContainer>

      <CardsContainer>
        <Summary>
          <Text variant='h3' mode='light'>
            Crédito
          </Text>
          <Text variant='h3' mode='light'>
            + R$ 1.000,00
          </Text>
        </Summary>
        <Divider orientation='vertical' color='background' />
        <Summary>
          <Text variant='h3' mode='light'>
            Débito
          </Text>
          <Text variant='h3' mode='light'>
            - R$ 1.000,00
          </Text>
        </Summary>
      </CardsContainer>

      <HistoryContainer>
        <HistoryTitleContainer>
          <Text bold>Transações</Text>
        </HistoryTitleContainer>

        <Divider />

        {loading ? <ActivityIndicator /> : <History renderItem={renderItem} keyExtractor={keyExtractor} data={transactions} />}
      </HistoryContainer>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent />
    </Container>
  );
}
