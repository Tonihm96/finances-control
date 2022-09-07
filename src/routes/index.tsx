import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

import { Login } from '../screens/Login';

export function Routes() {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <Login />}
    </NavigationContainer>
  );
}
