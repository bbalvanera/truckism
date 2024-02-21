import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { GameProfile } from '@core/types';
import useGameProfiles from '../../hooks/useGameProfiles';
import AtsIcon from '../AtsIcon';
import EtsIcon from '../EtsIcon';
import OptionGroupHeader from '../OptionGroupHeader';
import Selector from '../Selector';

function renderProfileOptions({ id, isRemote, name }: GameProfile) {
  return (
    <MenuItem key={id} value={id}>
      <ListItemText>
        <Typography variant="body1">{name}</Typography>
      </ListItemText>
      <Typography variant="body2" color="text.secondary">
        {isRemote ? 'Remote' : 'Local'}
      </Typography>
    </MenuItem>
  );
}

function renderProfileValue(profile: GameProfile) {
  return (
    <ListItem disablePadding component="div" sx={{ pr: 2 }}>
      <ListItemIcon sx={{ minWidth: '36px' }}>
        {profile.gameName === 'ats' ? <AtsIcon /> : <EtsIcon />}
      </ListItemIcon>
      <ListItemText
        sx={{ m: 0 }}
        primary={profile.name}
        // secondary={selectedProfile?.id}
      />
      <Typography variant="body2">{profile.isRemote ? 'Remote' : 'Local'}</Typography>
    </ListItem>
  );
}

const Selectors = () => {
  const { t } = useTranslation();
  const { isLoading, profiles } = useGameProfiles();
  const [selectedProfileId, setSelectedProfileId] = useState<string>('');

  function renderValue(value: string) {
    const profile = profiles?.find(({ id }) => id === value);
    return profile ? renderProfileValue(profile) : '';
  }

  return (
    <>
      <Selector
        id="profile"
        label={isLoading ? t('dispatcher.profileSelect-loading') : t('dispatcher.profileSelect')}
        disabled={isLoading}
        value={selectedProfileId}
        onChange={(e) => setSelectedProfileId(e.target.value)}
        valueRenderer={renderValue}
      >
        <OptionGroupHeader key="ats" gameName="ats" />
        {profiles?.filter(({ gameName }) => gameName === 'ats').map(renderProfileOptions)}
        <OptionGroupHeader key="ets2" gameName="ets2" />
        {profiles?.filter(({ gameName }) => gameName === 'ets2').map(renderProfileOptions)}
      </Selector>
      <FormControl fullWidth>
        <InputLabel className="TsdAppBar-toolbarFormControlInputLabel" id="savefileLabel">
          {t('dispatcher.saveFileSelect')}
        </InputLabel>
        <Select labelId="savefileLabel"></Select>
      </FormControl>
      <Box className="TsdInstalledGames-root">There be buttons here</Box>
    </>
  );
};

export default Selectors;
