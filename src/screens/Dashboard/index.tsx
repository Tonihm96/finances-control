import React, { useEffect } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { Transaction, useTransactions } from '../../hooks/transactions';

import {
  Container,
  TransactionList,
  ListSeparator,
  MonthSelector,
  MonthSelectButton,
  MonthSelectIcon,
  Month
} from './styles';
import { ListItem } from '../../components/ListItem';

export function Dashboard() {
  const { transactions, requestTransactions } = useTransactions();

  function renderItem({ item }: ListRenderItemInfo<Transaction>) {
    return (
      <ListItem
        title={item.descripition}
        value={item.value}
        date={item.date}
        credDeb={item.cred_deb}
      />
    );
  }

  function keyExtractor(item: Transaction) {
    return item.id;
  }

  useEffect(() => {
    requestTransactions();
  }, []);

  return (
    <Container>
      <MonthSelector>
        <MonthSelectButton onPress={() => null}>
          {/* <MonthSelectIcon /> */}
        </MonthSelectButton>

        <Month></Month>

        <MonthSelectButton onPress={() => null}>
          {/* <MonthSelectIcon /> */}
        </MonthSelectButton>
      </MonthSelector>
      <TransactionList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ListSeparator}
      />
    </Container>
  );
}
