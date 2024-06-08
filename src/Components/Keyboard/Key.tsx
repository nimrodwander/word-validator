import { Button } from '@mui/material';
import React from 'react';
import { eventhub } from '../../util/MyActionListener';
import { IActionMessageBody } from '../../util/Types';

interface IProps {
  data: IActionMessageBody<string | null>;
}

export const Key: React.FC<IProps> = ({ data }) => {
  const onClickHandler = () => {
    if (eventhub.hasListener(data.action)) {
      eventhub.emit(data.action, data);
    }
  };

  return (
    <Button variant="contained" onClick={onClickHandler} sx={{ margin: '2px' }}>
      {data.name}
    </Button>
  );
};
