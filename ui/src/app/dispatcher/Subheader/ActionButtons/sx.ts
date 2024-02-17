import SxDef from '@core/types/SxDef';
import { expandFlex } from '@core/utils/expandShorthandCss';

const useSx = (): SxDef => ({
  height: '100%',
  ...expandFlex({
    j: 'flex-end',
    a: 'center',
    g: 2,
  }),
});

export default useSx;
