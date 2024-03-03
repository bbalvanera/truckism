import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { GameProfile } from '@core/types';
import useProfileSaves from '../../hooks/useProfileSaves';
import useUserProfiles from '../../hooks/useUserProfiles';
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

function renderSaveOptions({ infoPath, name }: { infoPath: string; name: string }) {
  return (
    <MenuItem key={infoPath} value={infoPath}>
      <ListItemText>
        <Typography variant="body1">{name}</Typography>
      </ListItemText>
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
  const [selectedProfileId, setSelectedProfileId] = useState('');
  const [selectedSaveId, setSelectedSaveId] = useState('');
  const { isLoading: isLoadingProfiles, profiles } = useUserProfiles();
  const { isLoading: isLoadingSaves, saves } = useProfileSaves(selectedProfileId);

  function profileFromId(profileId: string) {
    return profiles?.find(({ id }) => id === profileId);
  }

  function renderProfileSelectorValue(value: string) {
    const profile = profileFromId(value);
    return profile ? renderProfileValue(profile) : '';
  }

  const handleProfileChange = async (profileId: string) => {
    setSelectedProfileId(profileId);
  };

  return (
    <>
      <Selector
        id="profile"
        label={
          isLoadingProfiles ? t('dispatcher.profileSelect-loading') : t('dispatcher.profileSelect')
        }
        disabled={isLoadingProfiles}
        value={selectedProfileId}
        onChange={(e) => handleProfileChange(e.target.value)}
        valueRenderer={renderProfileSelectorValue}
      >
        <OptionGroupHeader key="ats" gameName="ats" />
        {profiles?.filter(({ gameName }) => gameName === 'ats').map(renderProfileOptions)}
        <OptionGroupHeader key="ets2" gameName="ets2" />
        {profiles?.filter(({ gameName }) => gameName === 'ets2').map(renderProfileOptions)}
      </Selector>
      <Selector
        id="saves"
        label={isLoadingSaves ? t('dispatcher.saveSelect-loading') : t('dispatcher.saveSelect')}
        disabled={isLoadingSaves}
        value={selectedSaveId}
        onChange={(e) => setSelectedSaveId(e.target.value)}
      >
        {saves?.map(renderSaveOptions)}
      </Selector>
      <Box className="TsdInstalledGames-root">There be buttons here</Box>
    </>
  );
};

export default Selectors;
