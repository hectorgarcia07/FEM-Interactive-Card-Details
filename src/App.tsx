import logo from './logo.svg';
import Form from './components/CreditInfoForm'
import { Box, ThemeProvider } from '@mui/system';
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
    <Box sx={{ maxWidth: 350, bgcolor: 'blue' }} >
      <Form />
    </Box>
  );
}

export default App;
