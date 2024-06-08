import { Box, FormControl } from '@mui/material';
import { useState } from 'react';
import { EActionsNames, IActionMessageBody } from '../../util/Types';
import { useEventListener } from '../../util/useEventListener';
import { useSpellCheck } from '../../util/useSpellCheck';
import { CharWindowInput } from './CharWindowInput';
import { ValidationIndicator } from './LoadingComponent';

interface IProps {
  numberOfInputs: number;
}

export const WindowsInput: React.FC<IProps> = ({ numberOfInputs }) => {
  const [word, setString] = useState<string>('');
  const endOfInput = numberOfInputs === word.length;

  const [shouldSpellCheck, setShouldSpellCheck] = useState<boolean>(false);
  const { hasTypo, typoCheckStatus } = useSpellCheck(shouldSpellCheck, word);

  const onTypeHandler = (data: IActionMessageBody<string | null>) => {
    if (word.length < numberOfInputs) {
      setString(word + data.value);
    }
  };

  const onDeleteHandler = () => {
    //prevents additional rerenders if its not the end of the inputs
    if (endOfInput) {
      setShouldSpellCheck(false);
    }
    setString(word.slice(0, -1));
  };

  const onEnterHandler = () => {
    //prevents additional rerenders if its not the end of the inputs
    if (endOfInput) {
      setShouldSpellCheck(true);
    }
  };

  const dependencies = [word, setString];
  useEventListener(EActionsNames.ON_TYPE, onTypeHandler, dependencies);
  useEventListener(EActionsNames.ON_DELETE, onDeleteHandler, dependencies);
  useEventListener(EActionsNames.ON_ENTER, onEnterHandler, dependencies);

  const mapChars = () => {
    let arr = [];
    for (let i = 0; i < numberOfInputs; i++) {
      arr[i] = <CharWindowInput error={hasTypo} char={word[i] || ''} key={i} />;
    }
    return arr;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
      <FormControl sx={{ dispaly: 'flex', flexDirection: 'row' }}>
        {mapChars()}
      </FormControl>
      <ValidationIndicator loading={typoCheckStatus} />
    </Box>
  );
};
