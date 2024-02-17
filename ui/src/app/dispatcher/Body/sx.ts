import { alpha } from '@mui/material';
import SxDef from '@core/types/SxDef';
import { expandFlex } from '@core/utils/expandShorthandCss';

const useSx = (): SxDef => (theme) => ({
  p: 8,
  mb: 4,
  display: 'grid',
  gridTemplateColumns: '[left] 1fr [right] 1fr [end]',
  gridTemplateRows: 'auto',
  gap: 2,
  '& .left': {
    gridColumn: 'left',

    '&.TsdJobGridCell-leftActionButton': {
      ...expandFlex({ g: 2 }),
      mt: 4,
    },
  },
  '& .right': {
    gridColumn: 'right',

    '&.TsdJobGridCell-rightActionButton': {
      justifySelf: 'end',
      mt: 4,
    },
  },
  '& .fullWidth': {
    gridColumn: 'left / end',
  },
  '& .TsdJobListItem-root': {
    ...expandFlex({ d: 'row', j: 'space-between' }),
    bgcolor: 'background.default',
  },
  '& .TsdJobListItem-content': {
    ...expandFlex({ j: 'space-between' }),
    flex: '1 0 auto',
  },
  '& .TsdJobListItem-contentTypography': {
    flexGrow: 1,
    ...expandFlex({ d: 'column', a: 'center', j: 'space-around' }),
  },
  '& .TsdJobListItem-contentJobFlags': {
    ...expandFlex({ j: 'flex-end' }),
    maxWidth: '128px',
  },
  '& .TsdJobListItem-deleteButton': {
    flex: '0 0 28px',

    '& button': {
      position: 'relative',
      p: 0,
      m: 0,
      height: '100%',
      width: '100%',
      bgcolor: alpha(theme.palette.error.main, 0.4),
      border: 'none',
      cursor: 'pointer',
      borderRadius: 0,
      '&:hover': {
        bgcolor: 'error.main',
      },
    },
  },
});

export default useSx;
