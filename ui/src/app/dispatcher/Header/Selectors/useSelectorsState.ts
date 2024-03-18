import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logger from '@core/utils/logger';
import {
  useAvailableGames,
  useProfileSaves,
  useCurrentProfile,
  useUserProfiles,
} from '../../hooks/';

const useSelectorsState = () => {
  const { t } = useTranslation();
  const [selectedProfileId, setSelectedProfileId] = useState('');
  const [selectedSaveId, setSelectedSaveId] = useState('');
  const { games, error: gamesError } = useAvailableGames();
  const { isLoading: isLoadingProfiles, profiles, error: profileError } = useUserProfiles();
  const {
    isLoading: isLoadingSaves,
    error: savesError,
    saves,
  } = useProfileSaves(selectedProfileId);
  const [currentProfile, setCurrentProfile] = useCurrentProfile();

  const error = gamesError ?? profileError ?? savesError;
  if (error) {
    logger.error({ obj: error, message: 'Error fetching data' });
  }

  return {
    selectedProfileId,
    selectedSaveId,
    currentProfile,
    isLoadingProfiles,
    isLoadingSaves,
    gamesError,
    error,
    games,
    profiles,
    saves,
    t,
    setSelectedProfileId,
    setSelectedSaveId,
    setCurrentProfile,
  };
};

export default useSelectorsState;
