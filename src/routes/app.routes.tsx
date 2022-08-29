import React from 'react';
import { Foundation as Icon } from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs';

import { TransactionsProvider } from '../hooks/transactions';

import { Dashboard } from '../screens/Dashboard';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  const screenOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.outline,
    tabBarShowLabel: false
  };

  return (
    <TransactionsProvider>
      <Navigator screenOptions={screenOptions}>
        <Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Icon name='graph-pie' size={size} color={color} />
            )
          }}
        />
      </Navigator>
    </TransactionsProvider>
  );
}
