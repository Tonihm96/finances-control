import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { Transaction, useTransactions } from '../../hooks/transactions';

//import { ListItem } from '../../components/ListItem';
import { Divider } from '../../components/Divider';

export function Transactions() {
  const { transactions } = useTransactions();

  function renderItem({ item }: ListRenderItemInfo<Transaction>) {
    return null; //<ListItem title={item.description} value={item.value} date={item.date} credDeb={item.cred_deb} />;
  }

  function keyExtractor(item: Transaction) {
    return item.id;
  }

  function itemSeparatorComponent() {
    return <Divider />;
  }

  return (
    <Container>
      <TransactionList data={transactions} renderItem={renderItem} keyExtractor={keyExtractor} ItemSeparatorComponent={itemSeparatorComponent} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const TransactionList = styled(FlatList as new (props: FlatListProps<Transaction>) => FlatList<Transaction>)``;
