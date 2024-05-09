import React from 'react';
import { Typography, AppBar } from '@mui/material';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Options from './components/Options/Options';
import Notifications from './components/Notifications/Notifications';

const App = () => {
  return (
    <div>
        <AppBar position='static' color='inherit'>
            <Typography variant='h4' align='left'>Chatify</Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
            <Notifications />
        </Options>
    </div>
  )
}

export default App