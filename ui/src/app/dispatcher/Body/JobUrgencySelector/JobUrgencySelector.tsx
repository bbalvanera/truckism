import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export type Urgency = 'Standard' | 'Important' | 'Urgent';

export interface JobUrgencySelectorProps {
  urgency: Urgency;
  onChange?: (urgency: Urgency) => void;
}

const JobUrgencySelector = ({ urgency, onChange }: JobUrgencySelectorProps) => {
  function getVariant(value: Urgency): 'contained' | 'outlined' {
    return urgency === value ? 'contained' : 'outlined';
  }

  return (
    <ButtonGroup
      fullWidth
      disableElevation
      disableRipple
      disableFocusRipple
      sx={{ height: '54px' }}
    >
      <Button
        name="Standard"
        variant={getVariant('Standard')}
        onClick={() => onChange?.('Standard')}
      >
        Standard
      </Button>
      <Button
        name="Important"
        variant={getVariant('Important')}
        onClick={() => onChange?.('Important')}
      >
        Important
      </Button>
      <Button name="Urgent" variant={getVariant('Urgent')} onClick={() => onChange?.('Urgent')}>
        Urgent
      </Button>
    </ButtonGroup>
  );
};

export default JobUrgencySelector;
