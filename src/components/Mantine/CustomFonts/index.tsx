import { Global } from '@mantine/core';
import React from 'react';

export default function CustomFonts(): JSX.Element {
  return (
    <Global
      styles={[
        {
          '@import': 'url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap")',
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontWeight: 800,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
