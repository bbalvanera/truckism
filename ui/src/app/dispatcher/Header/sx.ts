import { alpha } from '@mui/material/styles';
import SxDef from '@core/types/SxDef';

// prettier-ignore
const useSx = (isLoading = true): SxDef => (theme) => ({
  '& .TsdAppBar-container': { display: 'flex', flexDirection: 'row' },
  '& .TsdAppBar-toolbarFormControlInputLabel': {
    fontStyle: isLoading ? 'italic' : 'normal',
  },
  '& .MuiToolbar-root': {
    p: `${theme.spacing(5)} ${theme.spacing(8)}`,
    justifyContent: 'space-between',
    flex: 1,
    gap: 3,

    '& .MuiFormControl-root': {
      flexGrow: 1,
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
  },
});

export default useSx;
