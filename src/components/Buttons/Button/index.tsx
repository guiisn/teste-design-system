import { ButtonProps, Button as MantineButton } from '@mantine/core';
import React from 'react';

export interface CustomButtonProps extends ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: CustomButtonProps): JSX.Element {
  return (
    <MantineButton {...props} />
  );
}
