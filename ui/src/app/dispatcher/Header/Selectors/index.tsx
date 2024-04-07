import React, { useEffect } from 'react';
import { GameProfile, SaveSlot } from 'truckism-types';
import If from '@components/If';
import IfNotNull from '@components/IfNotNull';
import ErrorMessage from '../ErrorMessage';
import Selector from '../Selector';
import renderProfileOptions from './renderProfileOptions';
import renderProfileValue from './renderProfileValue';
import renderSaveOptions from './renderSaveOptions';
import useSelectorsState from './useSelectorsState';

const Selectors = () => {
  const {
    selectedProfileId,
    selectedSaveId,
    isLoadingProfiles,
    isLoadingSaves,
    games,
    profiles,
    saves,
    error,
    t,
    setSelectedProfileId,
    setSelectedSaveId,
    setCurrentProfile,
  } = useSelectorsState();

  function profileFromId(profileId: string) {
    return profiles?.find(({ id }) => id === profileId);
  }

  function saveFromId(saveId: string) {
    return saves?.find(({ infoPath }) => infoPath === saveId);
  }

  function renderProfileSelectorValue(value: string) {
    const profile = profileFromId(value);
    return profile ? renderProfileValue(profile) : '';
  }

  function updateCurrentProfile(profileId: string, saveId: string) {
    const profile = profileFromId(profileId) as GameProfile;
    const save = saveFromId(saveId) as SaveSlot;

    if (profile && save) {
      setCurrentProfile({ profile, save });
    }
  }

  const handleProfileChange = (value: string) => {
    setSelectedSaveId('');
    setSelectedProfileId(value);

    updateCurrentProfile(value, '');
  };

  const handleSaveSelected = (value: string) => {
    setSelectedSaveId(value);
    updateCurrentProfile(selectedProfileId, value);
  };

  const profileSelectorLabel = isLoadingProfiles
    ? 'dispatcher.profileSelect-loading'
    : 'dispatcher.profileSelect';

  const saveSelectorLabel = isLoadingSaves
    ? 'dispatcher.saveSelect-loading'
    : 'dispatcher.saveSelect';

  useEffect(() => {
    if (!isLoadingSaves && selectedSaveId === '' && saves?.length) {
      const { infoPath } = saves[0];
      setSelectedSaveId(infoPath);

      updateCurrentProfile(selectedProfileId, infoPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingSaves, selectedSaveId, saves, setSelectedSaveId, setCurrentProfile]);

  return (
    <>
      <IfNotNull nullable={error}>{() => <ErrorMessage message="message.noLoginUser" />}</IfNotNull>
      <If condition={games && games.status !== 'installed'}>
        <ErrorMessage message={`message.${games?.status}`} />
      </If>
      <If condition={games?.status === 'installed'}>
        <Selector
          id="profile"
          label={t(profileSelectorLabel)}
          disabled={isLoadingProfiles}
          value={selectedProfileId}
          onChange={(e) => handleProfileChange(e.target.value)}
          valueRenderer={renderProfileSelectorValue}
        >
          {games && renderProfileOptions(games, profiles)}
        </Selector>
        <Selector
          id="saves"
          label={t(saveSelectorLabel)}
          disabled={isLoadingSaves}
          value={selectedSaveId}
          onChange={(e) => handleSaveSelected(e.target.value)}
        >
          {saves && renderSaveOptions(saves)}
        </Selector>
      </If>
    </>
  );
};

export default Selectors;
