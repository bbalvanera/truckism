import React from 'react';
import { SaveSlot } from 'truckism-types';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const noSavesFound = [
  <MenuItem key="notfound" disabled>
    <Typography fontStyle="italic">No save files found</Typography>
  </MenuItem>,
];

function renderSaveOptions(saves: SaveSlot[] = []) {
  if (saves.length === 0) {
    return noSavesFound;
  }

  return saves.map(({ infoPath, name }) => (
    <MenuItem key={infoPath} value={infoPath}>
      {name}
    </MenuItem>
  ));
}

export default renderSaveOptions;
