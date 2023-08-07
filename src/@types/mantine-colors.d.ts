import { Tuple } from '@mantine/core';

type ExtendedCustomColors = 'laraPurple' | 'laraGrey' | 'laraAquamarine' | 'laraGreen' | 'laraOrange' | 'laraRed' | 'laraPink' | 'laraYellow' | 'laraBlue' | 'laraSuccess'

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<Tuple<string, 10>>;
  }
}
