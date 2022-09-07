import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs';

import { TransactionsProvider } from '../hooks/transactions';

import { Dashboard } from '../screens/Dashboard';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  // options={{
  //   tabBarIcon: ({ size, color }) => (
  //     <Icon name='graph-pie' size={size} color={color} />
  //   )
  // }}
  function createScreeOptions(): BottomTabNavigationOptions {
    return {
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.outline,
      tabBarShowLabel: false
    };
  }

  return (
    <TransactionsProvider>
      <Navigator screenOptions={createScreeOptions}>
        <Screen name='Dashboard' component={Dashboard} />
      </Navigator>
    </TransactionsProvider>
  );
}
