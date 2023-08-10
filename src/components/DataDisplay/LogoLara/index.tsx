import React from 'react';
import logoWhite from '../../../assets/logo-white.svg';
import logoBlack from '../../../assets/logo.svg';

export interface LogoLaraProps {
    variant?: 'black' | 'white'
    w?: number | string
    h?: number | string
}

const logo = {
  white: logoWhite,
  black: logoBlack,
};

export default function LogoLara({ variant = 'black', w, h }: LogoLaraProps): JSX.Element {
  return (
    <img src={logo[variant]} alt="LARA" style={{ width: w, height: h }} />
  );
}
