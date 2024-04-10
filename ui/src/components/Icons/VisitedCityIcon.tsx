import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '@assets/img/city_indicator/visited.png';
import IconProps from './IconProps';

const VisitedCityIcon = (props: IconProps) => {
  const { t } = useTranslation();
  return <img {...props} src={img} alt={t('dispatcher.visitedCityTooltip')} />;
};

export default VisitedCityIcon;
