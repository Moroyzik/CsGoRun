import React from 'react';
import {Box, Typography, Link} from "@mui/material";

const TestComponent = React.lazy(() => import('admin/TestComponent'));

function App() {
  return (
    <Box>
        <Typography>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>

      <TestComponent />
    </Box>
  );
}

export default App;
