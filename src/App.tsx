import logo from './logo.svg';
import Form from './components/CreditInfoForm'
import { Box } from '@mui/system';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from './components/Header';
import theme from './theme/theme'

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ maxWidth: '375px', margin: '0 auto' }} >
        <Header />
        <Form />
      </Box>
    </ThemeProvider>
  );
}

export default App;
