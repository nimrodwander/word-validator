import { Box, CircularProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import Crop169Icon from '@mui/icons-material/Crop169';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { EReqestStatuses } from '../../util/Types';

interface IProps {
  loading: EReqestStatuses | null;
}

export const ValidationIndicator: React.FC<IProps> = ({loading}) => {
    return (
        <>
        {loading === EReqestStatuses.PENDING && <CircularProgress size={20} />}
        {loading === EReqestStatuses.REJECTED && (
          <CloseIcon sx={{ color: 'red' }} />
        )}
        {loading === EReqestStatuses.FULLFILLED && (
          <SpellcheckIcon sx={{ color: 'lightGreen' }} />
        )}
        {loading === null && <KeyboardIcon />}
      </>
    );
};
