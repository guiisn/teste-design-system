import { ButtonProps, Button as MantineButton, MantineProvider } from '@mantine/core';
import React from 'react';
import GlobalTheme from '../../../styles/theme';

export interface CustomButtonProps extends ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: CustomButtonProps): JSX.Element {
  return (
    <MantineProvider theme={GlobalTheme} withGlobalStyles withNormalizeCSS>
      <MantineButton {...props} />
    </MantineProvider>
  );
}
