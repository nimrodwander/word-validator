import { TextField } from '@mui/material';
import React from 'react';

interface IProps {
  char: string;
  error: boolean | null;
  upperCase?: boolean;
}

export const CharWindowInput: React.FC<IProps> = ({ char, error, upperCase = true }) => {
  const setBorderColor = () => {
    if (error === true) {
      return 'red';
    } else if (error === false) {
      return 'green';
    } else {
      return null;
    }
  };
  return (
    <TextField
      sx={{
        width: '110px',
        margin: '30px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: setBorderColor(),
          },
        },
      }}
      InputProps={{
        readOnly: true,
        inputProps: {
          style: { textAlign: 'center', fontSize: 25 },
        },
      }}
      variant="outlined"
      value={upperCase ? char.toUpperCase() : char}
    />
  );
};
