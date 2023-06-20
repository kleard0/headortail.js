import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';

function Bloc() {
  const [pileColor, setPileColor] = useState('white');
  const [faceColor, setFaceColor] = useState('white');
  const [text, setText] = useState('Valeur du random');

  const handleReloadPilouFace = () => {
    var randomNumber = Math.random();
    randomNumber = (randomNumber * 100) + 1;
    setText(Math.round(randomNumber));
    const pileColor = randomNumber < 50 ? 'red' : 'white';
    const faceColor = randomNumber < 50 ? 'white' : 'blue';
    setPileColor(pileColor);
    setFaceColor(faceColor);
  };

  const refreshRandomNumber = () => {
    setText('Valeur du random');
    setFaceColor('white');
    setPileColor('white');
  };

  return (
    <>
      <Box border="2px solid red" display="flex" width={500} flexDirection="column">
        <Box display="flex">
          <Typography
            border="1px solid black"
            variant="h2"
            component="p"
            backgroundColor={pileColor}
            width="50%"
            textAlign="center"
          >
            <b>Pile</b>
          </Typography>
          <Typography
            border="1px solid black"
            variant="h2"
            component="p"
            backgroundColor={faceColor}
            width="50%"
            textAlign="center"
          >
            <b>Face</b>
          </Typography>
        </Box>
        <Box display="flex">
          <Button
            onClick={handleReloadPilouFace}
            variant="contained"
            color="primary"
            sx={{
              mx: 'auto',
              display: 'block',
              width: '100%',
            }}
          >
            Go!
          </Button>
        </Box>
        <Box display="flex" width="100%">
          <Box sx={{ width: '90%' }}>
            <Typography variant="h4" component="p">
              {text}
            </Typography>
          </Box>
          <Box sx={{ width: '10%' }}>
            <IconButton onClick={refreshRandomNumber} variant="contained" color="primary">
              <RefreshIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bloc />);
