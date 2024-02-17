import SxDef from '@core/types/SxDef';

const useSx = (): SxDef => ({
  p: 8,
  flexGrow: 1,
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default useSx;
