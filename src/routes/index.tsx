import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

import { Login } from '../screens/Login';
import { useAuth } from '../hooks/auth';

export function Routes() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <Login />}
    </NavigationContainer>
  );
}
