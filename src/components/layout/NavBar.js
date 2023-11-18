

// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useThemeContext } from './ThemeContext'; // Adjust the path as needed
import { useConnect, useAccount } from 'wagmi';

const Navbar = () => {
  const { toggleTheme } = useThemeContext();



  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          be•nev•o•lent
        </Typography>

    
        <IconButton onClick={toggleTheme} color="inherit">
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
