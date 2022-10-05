import React from 'react';
import { View } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import { TransactionsProvider } from '../hooks/transactions';

import { Icon, IconName } from '../components/Icon';
import { Dashboard } from '../screens/Dashboard';
import { Upload } from '../screens/Upload';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  function createScreeOptions({ route }: { route: RouteProp<ParamListBase, string> }): BottomTabNavigationOptions {
    function assignIcon(): IconName {
      switch (route.name) {
        case 'Dashboard':
          return 'linechart';
        case 'Upload':
          return 'upload';
        default:
          return 'linechart';
      }
    }

    return {
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.outline,
      tabBarShowLabel: false,
      headerShown: false,
      tabBarIcon: ({ focused }) => <Icon name={assignIcon()} color={focused ? 'primary' : 'outline'} size={focused ? 'xlarge' : 'large'} />
    };
  }

  return (
    <TransactionsProvider>
      <Navigator screenOptions={createScreeOptions}>
        <Screen name='Dashboard' component={Dashboard} />
        <Screen name='Upload' component={Upload} />
      </Navigator>
    </TransactionsProvider>
  );
}
