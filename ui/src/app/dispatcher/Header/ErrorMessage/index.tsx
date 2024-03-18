import React from 'react';
import { useTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';

const ErrorMessage = ({ message }: { message: string }) => {
  const { t } = useTranslation();

  return (
    <Alert variant="filled" severity="warning" sx={{ width: '100%' }}>
      {t(message)}
    </Alert>
  );
};

export default ErrorMessage;
