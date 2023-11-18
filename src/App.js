// App.js
import React from 'react';

import Navbar from './components/layout/NavBar'; // Adjust the path as needed
import Dashboard from './components/layout/Dashboard'; // Adjust the path as needed
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CustomThemeProvider } from './components/layout/ThemeContext'; // Corrected import

const theme = createTheme();

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CustomThemeProvider>
          <Navbar />
          <Dashboard />
        </CustomThemeProvider>
      </ThemeProvider>
  );
}

export default App;


