import React from 'react';
import atsLogoDisabled from '@assets/img/ats-disabled.png';
import atsLogo from '@assets/img/ats.png';
import IconProps from './IconProps';

const AtsIcon = ({ disabled, ...props }: IconProps) => {
  const logo = disabled ? atsLogoDisabled : atsLogo;
  return <img src={logo} alt="ATS" {...props} />;
};

export default AtsIcon;
