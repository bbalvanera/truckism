import { useContext } from 'react';
import { CurrentProfileContext } from '../providers/CurrentProfileProvider';
export type { CurrentProfile } from '../providers/CurrentProfileProvider';

const useCurrentProfile = () => {
  const context = useContext(CurrentProfileContext);

  if (context === null) {
    throw Error(
      'Context useCurrentProfile is not available. useCurrentProfile must be used within a child component of CurrentProfileProvider',
    );
  }

  return context;
};

export default useCurrentProfile;
