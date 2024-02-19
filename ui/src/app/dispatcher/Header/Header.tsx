import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AdPlaceholder from '@components/AdPlaceholder';
import Selectors from './Selectors';
import useSx from './sx';

const Header = () => {
  const sx = useSx();

  return (
    <AppBar sx={sx}>
      <Container className="TsdAppBar-container" maxWidth="md" disableGutters>
        <Toolbar>
          <Selectors />
        </Toolbar>
        <AdPlaceholder />
      </Container>
    </AppBar>
  );
};

export default Header;
