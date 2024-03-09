import React from 'react';
import etsLogoDisabled from '@assets/img/ets2-disabled.png';
import etsLogo from '@assets/img/ets2.png';
import IconProps from './IconProps';

const Ets2Icon = ({ disabled, ...props }: IconProps) => {
  const logo = disabled ? etsLogoDisabled : etsLogo;
  return <img src={logo} alt="ETS2" {...props} />;
};

export default Ets2Icon;
