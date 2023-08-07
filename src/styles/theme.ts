import { MantineThemeOverride } from '@mantine/core';
import {
  laraAquamarine, laraBlue, laraGreen, laraGrey, laraOrange, laraPink,
  laraRed, laraSuccess, laraYellow, laraPurple,
} from './colors';

const GlobalTheme: MantineThemeOverride = {
  colors: {
    violet: laraPurple,
    gray: laraGrey,
    indigo: laraAquamarine,
    blue: laraBlue,
    green: laraGreen,
    orange: laraOrange,
    pink: laraPink,
    red: laraRed,
    teal: laraSuccess,
    yellow: laraYellow,
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
      defaultProps: {
        color: 'laraPurple.4',
      },
      styles: {
        root: {
          '&:is(h1)': {
            fontFamily: 'Nunito',
            fontSize: '2.5rem',
          },
        },
      },
    },
    Loader: {
      defaultProps: {
        color: 'laraPurple.4',
      },
    },
  },
  loader: 'dots',
  fontFamily: 'Nunito',
  headings: { fontFamily: 'Nunito' },
};

export default GlobalTheme;
