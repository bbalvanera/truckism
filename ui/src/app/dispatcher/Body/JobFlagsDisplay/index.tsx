import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import adrClass1_img from '@assets/img/adr_class/adr_class_1.png';
import adrClass2_img from '@assets/img/adr_class/adr_class_2.png';
import adrClass3_img from '@assets/img/adr_class/adr_class_3.png';
import adrClass4_img from '@assets/img/adr_class/adr_class_4.png';
import adrClass6_img from '@assets/img/adr_class/adr_class_6.png';
import adrClass8_img from '@assets/img/adr_class/adr_class_8.png';
import articulated_img from '@assets/img/cargo_types/articulated.png';
import fragile_img from '@assets/img/cargo_types/fragile.png';
import heavy_img from '@assets/img/cargo_types/heavy.png';
import valuable_img from '@assets/img/cargo_types/valuable.png';

const adrClassImgMap = new Map<number, (width?: number) => JSX.Element>([
  /* eslint-disable react/jsx-key */
  [1, (width?: number) => <img src={adrClass1_img} alt="ADR class 1" width={width} />],
  [2, (width?: number) => <img src={adrClass2_img} alt="ADR class 2" width={width} />],
  [3, (width?: number) => <img src={adrClass3_img} alt="ADR class 3" width={width} />],
  [4, (width?: number) => <img src={adrClass4_img} alt="ADR class 4" width={width} />],
  [6, (width?: number) => <img src={adrClass6_img} alt="ADR class 6" width={width} />],
  [8, (width?: number) => <img src={adrClass8_img} alt="ADR class 8" width={width} />],
  /* eslint-enable react/jsx-key */
]);
export interface JobFlagsDisplayProps {
  articulated?: boolean;
  adrClass?: number;
  fragility?: number;
  overweight?: boolean;
  valuable?: boolean;
  width?: number;
}

const JobFlagsDisplay = ({
  articulated,
  fragility = 0,
  overweight,
  valuable,
  adrClass = 0,
  width = 32,
}: JobFlagsDisplayProps) => {
  const { t } = useTranslation();
  return (
    <Box className="TsdJobListItem-contentJobFlags">
      {articulated && <img src={articulated_img} alt={t('articulated')} width={width} />}
      {fragility >= 0.7 && <img src={fragile_img} alt={t('fragile')} width={width} />}
      {overweight && <img src={heavy_img} alt={t('heavy')} width={width} />}
      {valuable && <img src={valuable_img} alt={t('valuable')} width={width} />}
      {adrClassImgMap.get(adrClass)?.(width)}
    </Box>
  );
};

export default JobFlagsDisplay;
