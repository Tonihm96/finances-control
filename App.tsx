import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';

import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor='transparent'
        barStyle='dark-content'
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
}
