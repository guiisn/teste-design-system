import { ButtonProps, Button as MantineButton } from '@mantine/core';
import React from 'react';
import ThemeWrapper from '../../..';

export interface CustomButtonProps extends ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: CustomButtonProps): JSX.Element {
  return (
    <ThemeWrapper>
      <MantineButton {...props} />
    </ThemeWrapper>
  );
}
