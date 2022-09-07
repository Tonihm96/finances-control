import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ListRenderItemInfo } from 'react-native';
import { VictoryLine, VictoryPie } from 'victory-native';
import { format, add, sub, getMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Transaction, useTransactions } from '../../hooks/transactions';

import {
  Container,
  MonthSelector,
  CardsContainer,
  RecentTransactions
} from './styles';

import { ListItem } from '../../components/ListItem';
import { Text } from '../../components/Text';
import { IconButton } from '../../components/IconButton';
import { Divider } from '../../components/Divider';
import { AreaChart } from '../../components/AreaChart';
import { SummaryCard } from '../../components/SummaryCard';

export function Dashboard() {
  const { transactions, loading, requestTransactions } = useTransactions();
  const [curDate, setCurDate] = useState(new Date());

  const currentMonth = format(curDate, 'MMMM, yyyy', { locale: ptBR });
  const monthData: Array<Object> = [];

  function renderItem({ item }: ListRenderItemInfo<Transaction>) {
    return (
      <ListItem
        title={item.description}
        value={item.value}
        date={item.date}
        credDeb={item.cred_deb}
      />
    );
  }

  function keyExtractor(item: Transaction) {
    return item.id;
  }

  function itemSeparatorComponent() {
    return <Divider />;
  }

  useEffect(() => {
    requestTransactions(getMonth(curDate));
  }, []);

  useEffect(() => {
    requestTransactions(getMonth(curDate));
  }, [curDate]);

  return (
    <Container>
      <MonthSelector>
        <IconButton
          name='left'
          onPress={() => setCurDate(prev => sub(prev, { months: 1 }))}
        />
        <Text transform='capitalize'>{currentMonth}</Text>
        <IconButton
          name='right'
          onPress={() => setCurDate(prev => add(prev, { months: 1 }))}
        />
      </MonthSelector>
      <AreaChart data={monthData} />
      <CardsContainer>
        <SummaryCard type='C' title='Crédito total' content='R$ 1.000,00' />
        <SummaryCard type='D' title='Débito total' content='R$ 1.000,00' />
      </CardsContainer>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <RecentTransactions
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          itemSeparatorComponent={itemSeparatorComponent}
          data={transactions}
        />
      )}
    </Container>
  );
}
