import { alpha } from '@mui/material/styles';
import SxDef from '@core/types/SxDef';

const useSx = (): SxDef => (theme) => ({
  '& .MuiToolbar-root': {
    justifyContent: 'space-between',
    p: `${theme.spacing(5)} ${theme.spacing(1)}`,
    gap: 3,

    '& .MuiFormControl-root': {
      flexBasis: '35%',
      position: 'relative',
      borderRadius: theme.spacing(5),
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      '& > *': {
        color: theme.palette.primary.contrastText,
        '&.Mui-focused': {
          color: theme.palette.primary.contrastText,
        },
      },
    },
    '& .TsdInstalledGames-root': {
      flexGrow: 1,
    },
  },
});

export default useSx;
