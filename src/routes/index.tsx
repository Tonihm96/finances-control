import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { isAuthenticated } = useAuth();

  return <NavigationContainer>{isAuthenticated ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>;
}
