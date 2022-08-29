import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Foundation } from '@expo/vector-icons';

import { Transaction } from '../../hooks/transactions';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const TransactionList = styled(
  FlatList as new (props: FlatListProps<Transaction>) => FlatList<Transaction>
)``;

export const ListSeparator = styled.View`
  background-color: ${({ theme }) => theme.colors.outline};

  height: 1px;
  width: 100%;
`;

export const MonthSelector = styled.View``;

export const MonthSelectButton = styled(BorderlessButton)``;

export const MonthSelectIcon = styled(Foundation)``;

export const Month = styled.Text``;
