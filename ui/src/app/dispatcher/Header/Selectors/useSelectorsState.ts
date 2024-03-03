import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useProfileSaves from '../../hooks/useProfileSaves';
import useUserProfiles from '../../hooks/useUserProfiles';

const useSelectorsState = () => {
  const { t } = useTranslation();
  const [selectedProfileId, setSelectedProfileId] = useState('');
  const [selectedSaveId, setSelectedSaveId] = useState('');
  const { isLoading: isLoadingProfiles, profiles } = useUserProfiles();
  const { isLoading: isLoadingSaves, saves } = useProfileSaves(selectedProfileId);

  return {
    selectedProfileId,
    selectedSaveId,
    isLoadingProfiles,
    isLoadingSaves,
    profiles,
    saves,
    t,
    setSelectedProfileId,
    setSelectedSaveId,
  };
};

export default useSelectorsState;
