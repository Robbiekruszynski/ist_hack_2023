// App.js
import React from 'react';
import { CustomThemeProvider } from './components/layout/ThemeContext';
import Navbar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <CustomThemeProvider>
      <Navbar />
      <Dashboard />
    </CustomThemeProvider>
  );
}

export default App;
