import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { AuthStackParamList } from './Models';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthRoutes() {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false
  };

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name='Login' component={Login} />
      <Screen name='Register' component={Register} />
    </Navigator>
  );
}
