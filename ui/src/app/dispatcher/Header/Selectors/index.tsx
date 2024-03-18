import React from 'react';
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
  } = useSelectorsState();

  function profileFromId(profileId: string) {
    return profiles?.find(({ id }) => id === profileId);
  }

  function renderProfileSelectorValue(value: string) {
    const profile = profileFromId(value);
    return profile ? renderProfileValue(profile) : '';
  }

  const profileSelectorLabel = isLoadingProfiles
    ? 'dispatcher.profileSelect-loading'
    : 'dispatcher.profileSelect';

  const saveSelectorLabel = isLoadingSaves
    ? 'dispatcher.saveSelect-loading'
    : 'dispatcher.saveSelect';

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
          onChange={(e) => setSelectedProfileId(e.target.value)}
          valueRenderer={renderProfileSelectorValue}
        >
          <IfNotNull nullable={games}>{(g) => renderProfileOptions(g, profiles)}</IfNotNull>
        </Selector>
        <Selector
          id="saves"
          label={t(saveSelectorLabel)}
          disabled={isLoadingSaves}
          value={selectedSaveId}
          onChange={(e) => setSelectedSaveId(e.target.value)}
        >
          <IfNotNull nullable={saves}>{renderSaveOptions}</IfNotNull>
        </Selector>
      </If>
    </>
  );
};

export default Selectors;
