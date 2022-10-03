import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { VictoryBar, VictoryChart, Bar } from 'victory-native';

import { Transaction } from '../../hooks/transactions';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  flex: 1;
`;

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  padding-top: ${({ theme }) => theme.sizes.small + getStatusBarHeight()}px;
  padding-bottom: ${({ theme }) => theme.sizes.large}px;
  margin-bottom: -${({ theme }) => theme.sizes.large}px;

  flex: 1.25;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  padding: ${({ theme }) => theme.sizes.medium}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PeriodSelector = styled.View`
  padding: 0 ${({ theme }) => theme.sizes.large}px;
  margin-bottom: ${({ theme }) => theme.sizes.large}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PeriodInfo = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const CardsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  padding-top: ${({ theme }) => theme.sizes.large}px;
  padding-bottom: ${({ theme }) => theme.sizes.large * 2}px;
  margin-bottom: -${({ theme }) => theme.sizes.large}px;

  border-top-left-radius: ${({ theme }) => theme.sizes.medium}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.medium}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Summary = styled.View`
  padding: 0 ${({ theme }) => theme.sizes.medium}px;

  flex: 1;
  align-items: center;
`;

export const HistoryContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  padding-bottom: 0px;

  border-top-left-radius: ${({ theme }) => theme.sizes.medium}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.medium}px;

  flex: 1;
`;

export const HistoryTitleContainer = styled.View`
  padding: ${({ theme }) => theme.sizes.medium}px;
`;

export const History = styled(FlatList as new (props: FlatListProps<Transaction>) => FlatList<Transaction>)`
  padding: 0 ${({ theme }) => theme.sizes.small}px;

  flex: 1;
`;
