import SxDef from '@core/types/SxDef';

const useSx = (): SxDef => ({
  mt: '96px',
  display: 'flex',
  justifyContent: 'space-between',
  '& .TsdContentLayout-content': {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
});

export default useSx;
