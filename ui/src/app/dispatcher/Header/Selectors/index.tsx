import React from 'react';
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
    t,
    setSelectedProfileId,
    setSelectedSaveId,
  } = useSelectorsState();

  function profileFromId(profileId: string) {
    return profiles?.find(({ id }) => id === profileId);
  }

  function renderProfileSelectorValue(value: string) {
    const profile = profileFromId(value);
    return profile ? renderProfileValue(profile) : '';
  }

  return (
    <>
      <Selector
        id="profile"
        label={
          isLoadingProfiles ? t('dispatcher.profileSelect-loading') : t('dispatcher.profileSelect')
        }
        disabled={isLoadingProfiles}
        value={selectedProfileId}
        onChange={(e) => setSelectedProfileId(e.target.value)}
        valueRenderer={renderProfileSelectorValue}
      >
        {renderProfileOptions(games, profiles)}
      </Selector>
      <Selector
        id="saves"
        label={isLoadingSaves ? t('dispatcher.saveSelect-loading') : t('dispatcher.saveSelect')}
        disabled={isLoadingSaves}
        value={selectedSaveId}
        onChange={(e) => setSelectedSaveId(e.target.value)}
      >
        {renderSaveOptions(saves)}
      </Selector>
    </>
  );
};

export default Selectors;
