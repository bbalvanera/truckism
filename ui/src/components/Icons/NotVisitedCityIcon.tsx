import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '@assets/img/not_visited_city.png';
import IconProps from './IconProps';

const NotVisitedCityIcon = (props: IconProps) => {
  const { t } = useTranslation();
  return <img {...props} src={img} alt={t('dispatcher.notVisitedCityTooltip')} />;
};

export default NotVisitedCityIcon;
