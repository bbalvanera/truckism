import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logger from '@core/utils/logger';
import useAvailableGames from '../../hooks/useAvailableGames';
import useProfileSaves from '../../hooks/useProfileSaves';
import useUserProfiles from '../../hooks/useUserProfiles';

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

  const error = gamesError ?? profileError ?? savesError;
  if (error) {
    logger.error({ obj: error, message: 'Error fetching data' });
  }

  return {
    selectedProfileId,
    selectedSaveId,
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
  };
};

export default useSelectorsState;
