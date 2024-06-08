import React from 'react';
import keyboard from '../../keyboard.json';
import { EActionsNames, IActionMessageBody } from '../../util/Types';
import { Key } from './Key';
import { Box } from '@mui/material';


export const Keyboard: React.FC = () => {
  
  const _keyboard = JSON.parse(JSON.stringify(keyboard));

  const mapChar = () => {
    return _keyboard[0].chars.map((char: string) => {
      const data: IActionMessageBody<string> = {
        name: char,
        action: EActionsNames.ON_TYPE,
        value: char,
      };

      return <Key key={char} data={data} />;
    });
  };

  const mapSpecialKeys = () => {
    return _keyboard[0].specialKeys.map(
      (specialKey: IActionMessageBody<null>) => {
        return <Key key={specialKey.name} data={specialKey}/>;
      }
    );
  };

  return (
    <Box
      sx={{
        marginTop: "60px",
        borderRadius: '25px',
        display: 'flex',
        flexWrap: 'wrap',
        boxShadow: 3,
        paddingX: '50px',
      }}
    >
      {mapChar()}
      {mapSpecialKeys()}
    </Box>
  );
};