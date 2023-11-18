// src/App.js
import React from 'react';
import Navbar from './components/layout/NavBar'; 
import Dashboard from './components/layout/Dashboard'; 
import Sidebar from './components/layout/SideBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CustomThemeProvider } from './components/layout/ThemeContext'; 

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomThemeProvider>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flexGrow: 1 }}>
            <Dashboard />
          </div>
          <Sidebar />
        </div>
      </CustomThemeProvider>
    </ThemeProvider>
  );
}

export default App;





