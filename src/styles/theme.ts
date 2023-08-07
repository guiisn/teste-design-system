import { MantineThemeOverride } from '@mantine/core';
import {
  laraAquamarine, laraBlue, laraGreen, laraGrey, laraOrange, laraPink,
  laraRed, laraSuccess, laraYellow,
} from './colors';

const GlobalTheme: MantineThemeOverride = {
  colors: {
    laraPurple: ['#f2e3ff',
      '#d3b2ff',
      '#b47fff',
      '#964dff',
      '#771aff',
      '#5e00e6',
      '#4900b4',
      '#340082',
      '#1f0050',
      '#0b0020'],
    laraGrey,
    laraAquamarine,
    laraBlue,
    laraGreen,
    laraOrange,
    laraPink,
    laraRed,
    laraSuccess,
    laraYellow,
  },
  primaryColor: 'laraPurple',
  colorScheme: 'light',
  components: {
    Button: {
      defaultProps: {
        color: 'laraPurple.4',
      },
      styles: {
        root: {
          borderRadius: '30px',
          minWidth: '7.5rem',
          '&[data-loading]': {
            '.mantine-Button-label': {
              display: 'none',
              fontFamily: 'Nunito',
            },
          },
        },
      },
    },
    Title: {
      styles: {
        root: {
          '&:is(h1)': {
            fontFamily: 'Nunito',
            fontSize: '2.5rem',
          },
        },
      },
    },
  },
  loader: 'dots',
  fontFamily: 'Nunito',
  headings: { fontFamily: 'Nunito' },
};

export default GlobalTheme;
