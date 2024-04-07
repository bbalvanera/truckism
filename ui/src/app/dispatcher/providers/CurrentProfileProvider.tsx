import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { GameProfile, SaveSlot } from 'truckism-types';

export type CurrentProfile = { profile: GameProfile; save: SaveSlot };

export type ICurrentProfileProvider = [
  CurrentProfile | undefined,
  Dispatch<SetStateAction<CurrentProfile | undefined>>,
];

export const CurrentProfileContext = createContext<ICurrentProfileProvider>([undefined, () => {}]);

const CurrentProfileProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [currentProfile, setCurrentProfile] = useState<CurrentProfile | undefined>(undefined);
  const value = useMemo<ICurrentProfileProvider>(
    () => [currentProfile, setCurrentProfile],
    [currentProfile, setCurrentProfile],
  );
  return <CurrentProfileContext.Provider value={value}>{children}</CurrentProfileContext.Provider>;
};

export default CurrentProfileProvider;
