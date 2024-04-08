import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '@assets/img/visited_city.png';
import IconProps from './IconProps';

const VisitedCityIcon = (props: IconProps) => {
  const { t } = useTranslation();
  return <img {...props} src={img} alt={t('dispatcher.visitedCityTooltip')} />;
};

export default VisitedCityIcon;
