import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';

import theme from './src/styles/theme';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='light-content'
          translucent
        />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
