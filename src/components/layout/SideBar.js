// src/components/layout/Sidebar.js
import React from 'react';
import { Drawer, Card, CardContent, Typography, LinearProgress } from '@mui/material';

const Sidebar = () => {
  const tasks = [
    { title: 'Task 1', completion: 60 },
    { title: 'Task 2', completion: 30 },
    { title: 'Task 3', completion: 90 },
  ];

  return (
    <Drawer variant="permanent" anchor="left">
      {tasks.map((task, index) => (
        <Card key={index} style={{ margin: 8 }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <LinearProgress variant="determinate" value={task.completion} />
            <Typography color="textSecondary">Placeholder text</Typography>
          </CardContent>
        </Card>
      ))}
    </Drawer>
  );
};

export default Sidebar;
