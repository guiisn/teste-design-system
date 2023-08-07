import { Global } from '@mantine/core';
import React from 'react';

export default function CustomFonts(): JSX.Element {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 200,
            src: 'url("https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofIMN8k.ttf") format("truetype")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 300,
            src: 'url("https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofIMN4k.ttf") format("truetype")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 400,
            src: 'url("https://fonts.gstatic.com/s/nunito/v16/XRXV3I6Li01BKofINeaDw.ttf") format("truetype")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 500,
            src: 'url("https://fonts.gstatic.com/s/nunito/v16/XRXV3I6Li01BKofINeaB.woff2") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 600,
            src: 'url("https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofIMN6j.ttf") format("truetype")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 700,
            src: 'url("https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofINemY0OvIWzgPDA.ttf") format("truetype")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 800,
            src: 'url("https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofIMN7i.ttf") format("truetype")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 900,
            src: 'url("https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofIMN9Ir0i.ttf") format("truetype")',
          },
        },
      ]}
    />
  );
}
