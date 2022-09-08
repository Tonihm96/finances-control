import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';

import theme from './src/styles/theme';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            backgroundColor='transparent'
            barStyle='light-content'
            translucent
          />
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
