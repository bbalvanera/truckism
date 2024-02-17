import React, { createContext, PropsWithChildren, useState, useMemo } from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export type SnackbarType = AlertColor | 'default';

export interface ISnackbarContext {
  setOpen: (open: boolean) => void;
  setMessage: (message: string) => void;
  setType: (type: SnackbarType) => void;
}

const defaultSnackbarContext: ISnackbarContext = {} as unknown as ISnackbarContext;
export const SnackbarContext = createContext<ISnackbarContext>(defaultSnackbarContext);

const SnackbarProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<SnackbarType>('default');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const value = useMemo(() => ({ setOpen, setMessage, setType }), [setOpen, setMessage, setType]);

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      {type === 'default' ? (
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={5000}
          onClose={handleClose}
          message={message}
        />
      ) : (
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={type}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
