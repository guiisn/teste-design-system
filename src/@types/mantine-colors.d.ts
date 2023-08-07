import { DefaultMantineColor, Tuple } from '@mantine/core';

type ExtendedCustomColors = 'laraPurple' | 'laraGrey' | 'laraAquamarine' | 'laraGreen' | 'laraOrange' | 'laraRed' | 'laraPink' | 'laraYellow' | 'laraBlue' | 'laraSuccess' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
