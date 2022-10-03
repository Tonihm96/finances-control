import React from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import { TransactionsProvider } from '../hooks/transactions';

import { Icon } from '../components/Icon';
import { Dashboard } from '../screens/Dashboard';
import { View } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const TAB_ICON = {
  Dashboard: 'linechart',
  Test: 'linechart'
};

export function AppRoutes() {
  const theme = useTheme();

  function createScreeOptions({ route }: { route: RouteProp<ParamListBase, string> }): BottomTabNavigationOptions {
    const iconName = TAB_ICON[route.name];

    return {
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.outline,
      tabBarShowLabel: false,
      headerShown: false,
      tabBarIcon: ({ focused }) => <Icon name={iconName} color={focused ? 'primary' : 'outline'} size={focused ? 'xlarge' : 'large'} />
    };
  }

  return (
    <TransactionsProvider>
      <Navigator screenOptions={createScreeOptions}>
        <Screen name='Dashboard' component={Dashboard} />
        <Screen name='Test' component={View} />
      </Navigator>
    </TransactionsProvider>
  );
}
