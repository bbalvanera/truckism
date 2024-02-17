import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AdPlaceholder from '@components/AdPlaceholder';
import useSx from './sx';

const ContentLayout = ({ children }: PropsWithChildren<unknown>) => {
  const sx = useSx();

  return (
    <Container maxWidth="md" disableGutters component="main" sx={sx}>
      <Box className="TsdContentLayout-content">{children}</Box>
      <AdPlaceholder />
    </Container>
  );
};

export default ContentLayout;
