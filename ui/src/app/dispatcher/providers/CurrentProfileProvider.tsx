import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { GameProfile, SaveSlot } from 'truckism-types';

type CurrentProfile = { profile: GameProfile; save: SaveSlot };

export type ICurrentProfileProvider = [CurrentProfile, Dispatch<SetStateAction<CurrentProfile>>];

const defaultCurrentProfileContext: ICurrentProfileProvider = {} as any;
export const CurrentProfileContext = createContext<ICurrentProfileProvider>(
  defaultCurrentProfileContext,
);

const CurrentProfileProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [currentProfile, setCurrentProfile] = useState<CurrentProfile>({} as any);
  const value = useMemo<ICurrentProfileProvider>(
    () => [currentProfile, setCurrentProfile],
    [currentProfile, setCurrentProfile],
  );
  return <CurrentProfileContext.Provider value={value}>{children}</CurrentProfileContext.Provider>;
};

export default CurrentProfileProvider;
