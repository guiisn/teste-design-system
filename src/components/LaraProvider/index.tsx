import { BoxProps, MantineProvider } from '@mantine/core';
import React from 'react';
import GlobalTheme from '../../styles/theme';

export default function LaraProvider(props: BoxProps): JSX.Element {
  const { children } = props;

  return (
    <MantineProvider theme={GlobalTheme} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}
