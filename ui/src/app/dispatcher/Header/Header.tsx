import React from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import AdPlaceholder from '@components/AdPlaceholder';
import useSx from './sx';

const Header = () => {
  const sx = useSx();
  const { t } = useTranslation();

  // call api to get initial data, comprised of profiles and save files and installed games

  return (
    <AppBar sx={sx}>
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'row' }} disableGutters>
        <Toolbar sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="profile-select-label">{t('dispatcher.profileSelect')}</InputLabel>
            <Select
              labelId="profile-select-label"
              id="profile-select"
              placeholder={t('dispatcher.profileSelectPlaceholder')}
            >
              <MenuItem value={'10'}>Ten</MenuItem>
              <MenuItem value={'20'}>Twenty</MenuItem>
              <MenuItem value={'30'}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="savefile-select-label">{t('dispatcher.saveFileSelect')}</InputLabel>
            <Select
              labelId="savefile-select-label"
              id="savefile-select"
              placeholder={t('dispatcher.saveFileSelectPlaceholder')}
            >
              <MenuItem value={'10'}>Ten</MenuItem>
              <MenuItem value={'20'}>Twenty</MenuItem>
              <MenuItem value={'30'}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Box className="TsdInstalledGames-root">There be buttons here</Box>
        </Toolbar>
        <AdPlaceholder />
      </Container>
    </AppBar>
  );
};

export default Header;
