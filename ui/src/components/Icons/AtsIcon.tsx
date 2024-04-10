import React from 'react';
import atsLogo from '@assets/img/ats.png';
import IconProps from './IconProps';

const AtsIcon = (props: IconProps) => <img {...props} src={atsLogo} alt="ATS" />;

export default AtsIcon;
