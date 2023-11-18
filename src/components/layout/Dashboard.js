import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Dashboard() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue1, setSelectValue1] = useState('');
  const [selectValue2, setSelectValue2] = useState('');

  return (
    <Container style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {[1, 2].map((card) => (
          <Grid item xs={12} sm={6} key={card}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card {card}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginTop: '10px' }}>
                  <FormControl size="small">
                    <InputLabel>Dropdown 1</InputLabel>
                    <Select
                      value={selectValue1}
                      onChange={(e) => setSelectValue1(e.target.value)}
                      label="Dropdown 1"
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="Home"><HomeIcon /> Home</MenuItem>
                      <MenuItem value="Settings"><SettingsIcon /> Settings</MenuItem>
                      <MenuItem value="Favorite"><FavoriteIcon /> Favorite</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Input Field"
                    variant="outlined"
                    size="small"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <FormControl size="small">
                    <InputLabel>Dropdown 2</InputLabel>
                    <Select
                      value={selectValue2}
                      onChange={(e) => setSelectValue2(e.target.value)}
                      label="Dropdown 2"
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="Home"><HomeIcon /> Home</MenuItem>
                      <MenuItem value="Settings"><SettingsIcon /> Settings</MenuItem>
                      <MenuItem value="Favorite"><FavoriteIcon /> Favorite</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Dashboard;