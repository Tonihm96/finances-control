import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

//import { useAuth } from '../hooks/auth'

export function Routes() {
  //const { user } = useAuth();
  const user = { id: 1 };

  return (
    <NavigationContainer>
      <AppRoutes />
      {/*user.id ? <AppRoutes /> : <AuthRoutes />*/}
    </NavigationContainer>
  );
}
