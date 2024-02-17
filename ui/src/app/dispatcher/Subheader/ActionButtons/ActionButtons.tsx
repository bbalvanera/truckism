import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useSx from './sx';

export type ActionButtonsProps = {
  onUpdateGame?: VoidFunction;
  onLaunchGame?: VoidFunction;
};

const ActionButtons = ({ onUpdateGame, onLaunchGame }: ActionButtonsProps) => {
  const sx = useSx();
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Button variant="contained" color="secondary" onClick={onUpdateGame}>
        {t('updateGameBtn')}
      </Button>
      <Button variant="outlined" color="secondary" onClick={onLaunchGame}>
        {t('launchGameBtn')}
      </Button>
    </Box>
  );
};

export default ActionButtons;
