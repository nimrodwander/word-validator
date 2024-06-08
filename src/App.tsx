import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Main } from './UI/Main';
import { NavBar } from './UI/NavBar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App = () => {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar/>
        <Main />
      </ThemeProvider>
  );
};
