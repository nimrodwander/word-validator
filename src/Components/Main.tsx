import { Box } from '@mui/material';
import { WindowsInput } from './Input/WindowsInput';
import { Keyboard } from './Keyboard/Keyboard';

export const Main: React.FC = () => {
  return (
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", paddingX: "20vw", height: "85vh", justifyContent: "center"}}>
      <WindowsInput numberOfInputs={5} />
      <Keyboard />
    </Box>
  );
};
